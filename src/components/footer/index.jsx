import React from "react";
import {Container,
        Row,
        Col,
        Image} from "react-bootstrap";
import {FacebookLogo, InstagramLogo} from "../buttons/socialButtons";
import Link from "next/link";
import siteMap from "../../data/siteMap";

const Footer = ({navItems}) => (

    <div>
      <Container className="footer-container" fluid>
        <Row>
          <Col xs={12} md = {4}>
            <ul className="footer-map d-none d-md-block">
              {siteMap.map((item) => (
                <Link href={item.ref}>
                  <li className="footer-map-item">{item.page}</li>
                </Link>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <div className="socials-container" style={{"textAlign":"center"}}>
              <FacebookLogo/>
            </div>
          </Col>
          <Col xs={12} md={4} style={{"textAlign":"center", "verticalAlign":"bottom"}}>
            <Image
              src = "../../../static/images/TCRP LOGO UPDATED 3.23.20.jpg"
              height={220}
              width={450}
              fluid
            />
          </Col>
        </Row>
        <p align="center" className="footer-txt">&copy;2020 All Rights Reserved. Site Design by Octavia Social Media Strategies</p>
      </Container>
    </div>

);

export default Footer;
