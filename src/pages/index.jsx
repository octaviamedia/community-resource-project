import "../styles/main.scss";
import { Container } from "react-bootstrap";
import MainLayout from "../components/layout";

const Index = () => {
	return (
    <MainLayout>
  		<Container>
  			<h1>Hello World</h1>
  		</Container>
    </MainLayout>
	);
};

export default Index;
