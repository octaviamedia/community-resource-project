import "../styles/main.scss";
import { Container } from "react-bootstrap";
import MainLayout from "../components/layout";
import content from "../data/home";

const Index = () => {
	return (
    <MainLayout banner = {content.banner}>
  		<Container>
  			<h1>Hello World</h1>
  		</Container>
    </MainLayout>
	);
};

export default Index;
