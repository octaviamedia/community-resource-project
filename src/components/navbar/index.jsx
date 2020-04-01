import React from "react";
import {Navbar,
        Nav,
        NavDropdown,
        Form,
        FormControl,
        Button,
        Image} from 'react-bootstrap';


const MainNavbar = ({navItems}) => {
  return(
    <div>
    <Navbar expand="lg" className="nav" sticky="top">
      <Image
        src = "../../../static/images/TCRP LOGO UPDATED 3.23.20.jpg"
        width={350}
        height={150}
      />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto" defaultActiveKey="/">
          {navItems.map((item) => (
            <Nav.Link href={item.ref} replace>
              <span className = "item">{item.page}</span>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
};

export default MainNavbar;
