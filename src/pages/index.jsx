import "../styles/main.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import MainLayout from "../components/layout";
import content from "../data/home";

const Index = () => {
	return (
    <MainLayout banner = {content.banner}>
  		<Container>
  			<Row>
          <Col>
            <h1>We're Here to Help</h1>
            <p>{content.description}</p>
            <Button className="site-nav-btn mx-auto d-block"><span>About Us</span></Button>
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
          </Col>
          <Col xs={12} md={6}>
            <h2>The Importance of Social Distancing</h2>
            <Iframe
              link = "https://www.youtube.com/watch?v=-nZMeNP84gM?autoplay=1"
              credit = "Centers for Disease Control and Prevention (CDC)"
            />
          </Col>
        </Row>
  		</Container>
    </MainLayout>
	);
};

const Iframe = ({link, credit}) => (
  <div className = "iframe">
    <iframe width="100%" height="300"
      src={link}>
    </iframe>
    <text className = "text-muted">{credit}</text>
  </div>
);

export default Index;
