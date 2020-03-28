import "../styles/main.scss";
import { Container, Row, Col, Button, Image} from "react-bootstrap";
import Link from "next/link";
import content from "../data/resources";
import CalltoAction from "../components/cta"
import MainLayout from "../components/layout";

const Resources = () => {
	return (
    <MainLayout banner={content.banner}>
      <TopCol/>
      <CurrentResources
        resources = {content.resources}
      />
      <Callto/>
    </MainLayout>
	);
};

const TopCol = () => (
  <Container fluid>
    <Row className="peach">
      <Col>
        <h1>List of Community Resources</h1>
        <h3>No Hogging, Smart Shopping</h3>
        <p>{content.description}</p>
        <Link href="contact">
          <Button className="site-nav-btn mx-auto d-block"><span>Contact Us</span></Button>
        </Link>
      </Col>
    </Row>
  </Container>
);

const CurrentResources = ({resources}) => (
  <div className="m-3">
  <div className="resource-cont">
    {resources.map((item) => (
      <div className="resource-item">
        <p>{item}</p>
      </div>
    ))}
  </div>
  <h4>{content.bold}</h4>
  </div>
);

const Links = () => (
  <Container fluid>
    <Row>
      <Col>
        <h4>Links to Both Local and National Agencies Giving Relief and Updates on the latest from COVOD-19</h4>
      </Col>
    </Row>
    <Row>
      {content.links.map((el) => (
          <Col md={4} className="p-3">
            <a href={el.link}>
              <Image
                src={el.src}
                width={300}
                hieght={400}
                fluid
                className="mx-auto d-block logo-img"
              />
            </a>
          </Col>
      ))}
    </Row>
  </Container>
);

const Aid = () => (
  <Container fluid className="peach">
    <Row>
      <Col>
        <h2>Emergency Numbers</h2>
        <ol>
          <li>
            <h4 style={{"textAlign":"left"}}>Banner Health -
              <a href="tel:8445491851">1-844-549-1851</a></h4>
          </li>
          <li>
            <h4 style={{"textAlign":"left"}}>W.H.O Chat: If people have questions they can ask the WHO through the WhatsApp by sending a message to +41 79 781 87 91</h4>
            <a href="https://api.whatsapp.com/send?phone=41797818791&text=hi&source=&data=">https://api.whatsapp.com/send?phone=41797818791&text=hi&source=&data=</a>
          </li>
          <li>
            <h4 style={{"textAlign":"left"}}>T.M.C -
              <a href="tel:5206266016">1(520) 626-6016</a> or
              <a href="tel:8445428201">1(844) 542-8201</a></h4>
          </li>
        </ol>
      </Col>
    </Row>
  </Container>
);

const Callto = () =>(
  <Container fluid>
    <Row className="blue">
      <Col xs={12} md={6} className="p-3">
        <Image
          src="../static/images/TCRP LOGO UPDATED 3.23.20.jpg"
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


export default Resources;
