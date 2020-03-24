import "../styles/main.scss";
import { Container, Row, Col, Image} from "react-bootstrap";
import content from "../data/volunteer"
import MainLayout from "../components/layout";
import VolunteerForm from "../components/volunteerForm";

const Support = () => {
	return (
    <MainLayout banner={content.banner}>
      <Description/>
      <Steps/>
      <div>
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
        <p>{content.description}</p>
      </Col>
    </Row>
  </Container>
);

const steps = ["Join the Facebook Community", "Fill out the Form Below", "Attend a Quick Phone Interview"]

const Steps = () => (
  <Container className="blue" fluid>
    <Row>
      <Col>
        <h2 style={{"textAlign":"left"}}>Follow These Three Easy Steps</h2>
        <ol>
          {steps.map((step) => (
            <li>{step}</li>
          ))}
        </ol>
      </Col>
      <Col>
        <Image
          src = "../static/images/anna-earl-J-Jb1niw1j0-unsplash.jpg"
          fluid
        />
      </Col>
    </Row>
  </Container>
);

export default Support;
