import "../styles/main.scss";
import { Container } from "react-bootstrap";
import content from "../data/resources";
import MainLayout from "../components/layout";

const Resources = () => {
	return (
    <MainLayout banner={content.banner}>
  		<Container>
  			<h1>Resources</h1>
  		</Container>
    </MainLayout>
	);
};

export default Resources;
