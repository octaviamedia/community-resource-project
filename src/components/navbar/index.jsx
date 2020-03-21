import React from "react";
import {Navbar,
        Nav,
        NavDropdown,
        Form,
        FormControl,
        Button} from 'react-bootstrap';


const MainNavbar = ({navItems}) => {
  return(
    <div>
    <Navbar expand="lg" className="nav">

      <Navbar.Toggle className = "ml-auto">
        <div className = "toggleRow"></div>
        <div className = "toggleRow"></div>
        <div className = "toggleRow"></div>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-items">
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
