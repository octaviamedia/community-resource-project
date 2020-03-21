import "../styles/main.scss";
import { Container } from "react-bootstrap";
import content from "../data/about";
import MainLayout from "../components/layout";

const About = () => {
	return (
    <MainLayout banner = {content.banner}>
  		<Container>
  			<h1>About</h1>
  		</Container>
    </MainLayout>
	);
};

export default About;
