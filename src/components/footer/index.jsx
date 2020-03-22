import React from "react";
import {Container,
        Row,
        Col,
        Image} from "react-bootstrap";
import {FacebookLogo, InstagramLogo} from "../buttons/socialButtons";

import siteMap from "../../data/siteMap";

const Footer = ({navItems}) => (

    <div>
      <Container className="footer-container" fluid>
        <Row>
          <Col xs={12} md={8}>
            <Image
              src = "../../../static/images/acrp LOGO 031920 2.png"
              height={175}
              width={300}
              className = "m-auto d-block"
            />
          </Col>
          <Col xs={6} md={4} className = "d-none d-md-block">
            <Image
              src = "../../../static/images/perry-grone-lbLgFFlADrY-unsplash.jpg"
              fluid
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md = {4}>
            <ul className="footer-map">
              {siteMap.map((item) => (
                <li className="footer-map-item">{item.page}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <div className="socials-container">
              <FacebookLogo/>
              <InstagramLogo/>
            </div>
          </Col>
        </Row>
        <p align="center">&copy;2020 All Rights Reserved. Site Design by Octavia Social Media Strategies</p>
      </Container>
    </div>

);

export default Footer;
