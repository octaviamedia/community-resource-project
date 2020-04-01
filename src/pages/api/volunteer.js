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
    phone,
    email,
    zipcode,
    business,
    volunteerPosition,
    message,
    success

  } = req.body;

  mailgun.messages().send({
    from:`${name} <${email}>`,
    to: "idonlon51@gmail.com",
    subject:"New Volunteer from Arizona Community Project",
    text:"Zipecode: " + zipcode +"\nBusiness: " + business + "\nVolunteer Position: " + volunteerPosition + "\nMessage: \n" + comments;

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
