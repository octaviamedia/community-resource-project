import "../styles/main.scss";
import { Container, Row, Col, Image} from "react-bootstrap";
import content from "../data/volunteer"
import MainLayout from "../components/layout";
import {VolunteerForm} from "../components/forms";

const Support = () => {
	return (
    <MainLayout banner={content.banner}>
      <Description/>
      <Steps/>
      <div className="sand">
        <VolunteerForm/>
      </div>
    </MainLayout>
	);
};

const Description = () => (
  <Container fluid>
    <Row className="peach">
      <Col>
        <h1>Lend a Hand</h1>
        <h3>Why Volunteer for the Community</h3>
        <p>We know, we get it: another form to fill out, and where is my information even going? To answer this question, it's really pretty simple. We just want to know who and where our people are in our community. <br></br><br></br>
          For example, Sally lives on the northwest side; since we know that Sally lives on the northwest side, we know that Peter, who lives on the southwest side, can deliver supplies quickly or easily to Sally. <br></br><br></br>
          In order for us to be of service for everybody, we need to know who wants to do what so we can steer them straight to the right place in the community to help out. <br></br><br></br>
          Below is a list of ways that you can help us help others. Select any or all that you would like to participate in. <br></br><br></br>
          We’re not going to release your information to some big corporate giant or spam you with information that you don’t need. Instead, this information is to provide you with the resources and support that you need. <br></br><br></br>
          We thank you so much for considering volunteering with The Community and look forward to connecting with you soon.</p>
      </Col>
    </Row>
  </Container>
);

const steps = ["Join the Facebook Community", "Fill out the Form Below", "Attend a Quick Phone Interview"]

const Steps = () => (
  <Container className="blue" fluid>
    <Row>
      <Col xs={12} md={6}>
        <h2 style={{"textAlign":"left"}}>Follow These Three Easy Steps</h2>
        <ol>
          {steps.map((step) => (
            <li>{step}</li>
          ))}
        </ol>
      </Col>
      <Col xs={12} md={6} style={{"padding":"0"}}>
        <Image
          src = "../static/images/anna-earl-J-Jb1niw1j0-unsplash.jpg"
          width="100%"
          fluid
        />
      </Col>
    </Row>
  </Container>
);

export default Support;
