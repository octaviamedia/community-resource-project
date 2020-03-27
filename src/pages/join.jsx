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
      <Aid/>
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
        </div>
      </Col>
    </Row>
  </Container>
);

const Aid = () => (
  <Container fluid className="blue">
    <Row>
      <Col>
        <h2>If you Need Medical Assistance</h2>
        <ol>
          <li>
            <h4 style={{"textAlign":"left"}}>Banner Health -
              <a href="tel:8445491851">1-844-549-1851</a></h4>
          </li>
          <li>
            <h4 style={{"textAlign":"left"}}>W.H.O Chat: If people have questions they can ask the WHO through the WhatsApp by sending a message to +41 79 781 87 91</h4>
            <a href="https://api.whatsapp.com/send?phone=41797818791&text=hi&source=&data=">https://api.whatsapp.com/send?phone=41797818791&text=hi&source=&data=</a>
          </li>
          <li>
            <h4 style={{"textAlign":"left"}}>T.M.C -
              <a href="tel:5206266016">1(520) 626-6016</a> or
              <a href="tel:8445428201">1(844) 542-8201</a></h4>
          </li>
        </ol>
      </Col>
    </Row>
  </Container>
);



export default Join;
