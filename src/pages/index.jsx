import "../styles/main.scss";
import Link from "next/link";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import MainLayout from "../components/layout";
import CalltoAction from "../components/cta";
import content from "../data/home";

const Index = () => {
	return (
    <MainLayout banner = {content.banner}>
    </MainLayout>
	);
};

const CurrentResources = ({resources}) => (
  <Container fluid>
  <div className="m-3">
  <div className="resource-cont" className="mx-auto d-block">
    <h2>List of Current Resources</h2>
    <ol style={{"listStyleType":"none", "marginLeft":"-40px"}}>
    {resources.map((item) => (
        <li><h4>{item}</h4></li>
    ))}
    </ol>
  </div>
  <Link href="/resources">
    <Button className="site-nav-btn m-auto d-block"><span>More</span></Button>
  </Link>
  </div>
  </Container>
);

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
