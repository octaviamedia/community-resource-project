import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import Link from "next/link";

const CalltoAction = ({heading, steps}) => {
  return (
  <div>
    <h2>Ready to Join the Community?</h2>
    <p>{heading}</p>
    <ol style={{"listStyleType":"none", "textAlign":"center"}}>
    {steps.map((step) => (
      <li>{step}</li>
    ))}
    </ol>
    <div align="center">
      <Link href="/join">
        <Button className="site-nav-btn"><span>Join</span></Button>
      </Link>
      <Link href="/volunteer">
        <Button className="site-nav-btn"><span>Volunteer</span></Button>
      </Link>
    </div>
  </div>)
};

export default CalltoAction;
