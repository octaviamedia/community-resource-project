import "../styles/main.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import MainLayout from "../components/layout";
import {ContactForm}from "../components/forms";
import CalltoAction from "../components/cta";

const content = {
     "banner": {
        "img": "../../static/images/Home Banner Img.jpg",
        "title":"Lets Hear From You"
      },
      "cta": {
         "heading": "By joining the community, you’ll be able to receive and give help to those who are in need.Become part of the community, following these easy 3 steps:",
         "steps": [
            "Fill out the form by clicking the link below.",
            "Tell us what your needs are.",
            "Let your community contribute to you."
         ]
      }

}
const Contact = () => {
	return (
    <MainLayout banner={content.banner}>
  		<Container fluid>
        <Row className="peach">
          <ContactForm/>
        </Row>
        <Row>
          <Callto/>
        </Row>

  		</Container>
    </MainLayout>
	);
};

const Callto = () =>(
  <Container fluid>
    <Row className="blue">
      <Col xs={12} md={6} className="p-3">
        <Image
          src="../static/images/shutterstock_159666353.jpg"
          fluid
        />
      </Col>
      <Col xs={12} md={6}>
        <CalltoAction
          heading={content.cta.heading}
          steps={content.cta.steps}
        />
      </Col>
    </Row>
  </Container>
);

export default Contact;
