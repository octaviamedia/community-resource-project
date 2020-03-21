import "../styles/main.scss";
import { Container } from "react-bootstrap";
import content from "../data/volunteer"
import MainLayout from "../components/layout";

const Support = () => {
	return (
    <MainLayout banner={content.banner}>
  		<Container>
  			<h1>Volunteer</h1>
  		</Container>
    </MainLayout>
	);
};

export default Support;
