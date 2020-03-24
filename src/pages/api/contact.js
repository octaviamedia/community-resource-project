import Mailgun from "mailgun-js";
import process from "process";

const mailgun = Mailgun({
domain:process.env.MAILGUN_DOMAIN,
apiKey:process.env.MAILGUN_API_KEY
})

export default (req, res) => {
if (req.method === 'POST') {
  const {
    name,
    email,
    phone,
    message,
    success

  } = req.body;

  mailgun.messages().send({
    from:`${name} <${email}>`,
    to: "idonlon51@gmail.com",
    subject:"Message from Arizona Community Project Website",
    text:comments

  }, (error, body) => {
    console.log(body);
    if (error) {
      console.log(error)
      res.status(400).json({
        success:false
      });
    } else {
      res.status(200).json({
        success:true
      });
    }
  })
}
}
