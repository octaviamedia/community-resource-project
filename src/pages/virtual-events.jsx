import "../styles/main.scss";
import { Container } from "react-bootstrap";
import content from "../data/virtual-events";
import MainLayout from "../components/layout";

const VirtualEvents = () => {
	return (
    <MainLayout banner={content.banner}>
  		<Container>
  			<h1>Virtual Events</h1>
  		</Container>
    </MainLayout>
	);
};

export default VirtualEvents;
