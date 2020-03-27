import "../styles/main.scss";
import Link from "next/link";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import MainLayout from "../components/layout";
import CalltoAction from "../components/cta";
import content from "../data/home";

const Index = () => {
	return (
    <MainLayout banner = {content.banner}>
  		<Container fluid>
  			<Row className="peach">
          <Col>
            <h1>We're Here to Help</h1>
            <p>{content.description}</p>
            <Link href="/about">
              <Button className="site-nav-btn mx-auto d-block"><span>About Us</span></Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <h2>Current Update on COVID-19</h2>
            <p>{content.news}</p>
            <ol>
              {content.links.map((link) => (
                <a href={link}>
                  <li className="link">{link}</li>
                </a>
              ))}
            </ol>
            <p>If you are concerned that you may have COVID-19, or have any questions, call</p>
              <ol>
                <li>
                  <h4 style={{"textAlign":"left"}}>Banner Health - <a href="8445491851">844-549-1851</a></h4>
                </li>
              </ol>
            <Link href="resources">
              <Button className="site-nav-btn mx-auto d-block"><span>Resources</span></Button>
            </Link>
          </Col>

          <Col xs={12} md={6}>
            <h2>The Importance of Social Distancing</h2>
            <Iframe
              link = "https://www.youtube.com/embed/-nZMeNP84gM?autoplay=1"
              credit = "Centers for Disease Control and Prevention (CDC)"
            />
          </Col>
        </Row>

        <Row className="blue">
          <Col xs={12} md={6} className="p-3">
            <Image
              src="../static/images/TCRP Logo 3.21.20.jpg"
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
    </MainLayout>
	);
};

const Iframe = ({link, credit}) => (
  <div className = "iframe">
    <iframe width="100%" height="400"
      src={link}>
    </iframe>
    <a href="https://www.youtube.com/user/CDCStreamingHealth">
      <text className = "text-muted">{credit}</text>
    </a>
  </div>
);

export default Index;
