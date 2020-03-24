import "../styles/main.scss";
import { Container, Row, Col, Button, Image} from "react-bootstrap";
import Link from "next/link";
import content from "../data/resources";
import MainLayout from "../components/layout";

const Resources = () => {
	return (
    <MainLayout banner={content.banner}>
      <TopCol/>
      <CurrentResources
        resources = {content.resources}
      />
      <Links/>
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
    <Row className="peach">
      <Col>
        <h4>Links to Both Local and National Agencies Giving Relief and Updates on the latest from COVOD-19</h4>
      </Col>
    </Row>
    <Row className="peach">
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


export default Resources;
