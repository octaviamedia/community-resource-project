import "../styles/main.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import {FacebookLogo, InstagramLogo} from "../components/buttons/socialButtons";
import CalltoAction from "../components/cta";
import Link from "next/link";
import content from "../data/about";
import Cta from "../components/cta"
import MainLayout from "../components/layout";

const About = () => {
	return (
    <MainLayout banner = {content.banner}>
  		<TopCols
        cols = {content.cols}
      />
      <Why/>
      <TwoCols/>
      <Callto/>
    </MainLayout>
	);
};

const TopCols = ({cols}) => (
  <Container fluid>
    <Row className="peach">
      {cols.map((col) => (
        <Col xs={12} md={4}>
          <Image
            src={col.src}
            width={250}
            height={150}
            className="mx-auto d-block img-header"
          />
          <p>{col.statement}</p>
        </Col>
      ))}
    </Row>
  </Container>
);

const Why = ({}) => (
  <Container fluid>
    <Row>
      <Col xs={12} md={6} style={{"padding":"25px"}}>
        <Image
          src="../static/images/perry-grone-lbLgFFlADrY-unsplash.jpg"
          width="75%"
          height="80%"
          className="mx-auto d-block"
        />
      </Col>
      <Col xs={12} md={6}>
        <h2>Why are we Doing this?</h2>
        <p>{content.description}</p>
      </Col>
    </Row>
  </Container>
);

const TwoCols = () => (
  <Container fluid>
    <Row>
      <Col className="sand" style={{"textAlign":"center"}} xs={12} md={6}>
        <h2>Why Join the Community</h2>
        <p>{content.community}</p>
        <Link href="/join">
          <Button className="join-btn"><span>Join</span></Button>
        </Link>
      </Col>
      <Col className="sand" style={{"textAlign":"center"}} xs={12} md={6}>
        <Image
          src="../static/images/TCRP LOGO UPDATED 3.23.20.jpg"
          fluid
        />
      </Col>
    </Row>
  </Container>
);

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

export default About;
