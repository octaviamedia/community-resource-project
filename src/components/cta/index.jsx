import React from "react";
import {Row, Col, Button} from "react-bootstrap";

const CalltoAction = ({heading, steps}) => {
  return (
  <div>
    <h2>Ready to Join the Community?</h2>
    <p>{heading}</p>
    <ol>
    {steps.map((step) => (
      <li>{step}</li>
    ))}
    </ol>
    <div align="center">
      <Button className="site-nav-btn"><span>Join</span></Button>
      <Button className="site-nav-btn"><span>Volunteer</span></Button>
    </div>
  </div>)
};

export default CalltoAction;
