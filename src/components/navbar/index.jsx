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

      <Navbar.Toggle className = "ml-auto">
        <div className = "toggleRow"></div>
        <div className = "toggleRow"></div>
        <div className = "toggleRow"></div>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" defaultActiveKey="/">
          {navItems.map((item) => (
            <Nav.Link href={item.ref} replace>
              <span className = "item">{item.page}</span>
            </Nav.Link>
          ))}
        </Nav>
        <Navbar.Brand className = "ml-auto">
          <Nav.Link href="/join">
           <Button className="join-btn">
             <span>Join</span>
           </Button>
         </Nav.Link>

       </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
};

export default MainNavbar;
