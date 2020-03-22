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
        src = "../../../static/images/acrp LOGO 031920 2.png"
        width={210}
        height={110}
      />

      <Navbar.Toggle className = "ml-auto">
        <div className = "toggleRow"></div>
        <div className = "toggleRow"></div>
        <div className = "toggleRow"></div>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {navItems.map((item) => (
            <Nav.Link href={item.ref} replace>
              <span className = "item">{item.page}</span>
            </Nav.Link>
          ))}
        </Nav>
        <Navbar.Brand className = "ml-auto">
           <Button className="join-btn">
             <span>Join</span>
           </Button>

       </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
};

export default MainNavbar;
