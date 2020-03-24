import "../styles/main.scss";
import { Container } from "react-bootstrap";
import MainLayout from "../components/layout";
import {ContactForm}from "../components/forms";

const Contact = () => {
	return (
    <MainLayout>
  		<Container className="peach" fluid>
        <ContactForm/>
  		</Container>
    </MainLayout>
	);
};

export default Contact;
