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
  		</Container>
    </MainLayout>
	);
};

export default Index;
