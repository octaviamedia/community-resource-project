import "../styles/main.scss";
import React from "react";
import content from "../data/join";
import Link from "next/link";
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import MainLayout from '../components/layout';
import {FacebookLogo, InstagramLogo} from "../components/buttons/socialButtons";


const Join = () => {
  return (
    <MainLayout banner = {content.banner}>
      <TopCols
        cols = {content.cols}
      />
      <JoinFB/>
    </MainLayout>
  )
};

const TopCols = ({cols}) => (
  <Container fluid>
    <Row className="peach">
      <Col>
        <h1>Ways to Support the Community</h1>
      </Col>
    </Row>
    <Row className="peach">
      {cols.map((col) => (
        <Col xs={12} md={3} style={{"textAlign":"center"}}>
          <h3>{col.heading}</h3>
          <p>{col.description}</p>
          {col.button && <Link href={col.ref}>
            <Button className="site-nav-btn mx-auto d-block">
              <span>{col.button}</span>
            </Button>
          </Link>}
          {col.facebook &&
            <div>
              <a href="">
                <FacebookLogo/>
              </a>
            </div>
          }
        </Col>
      ))}
    </Row>
  </Container>
);

const JoinFB = () => (
  <Container>
      <h2>Join our Online Community</h2>
    <Row>
      <Col style={{"textAlign":"center"}}>
        <div className="socials-container">
          <FacebookLogo/>
          <InstagramLogo/>
        </div>
      </Col>
    </Row>
  </Container>
);



export default Join;
