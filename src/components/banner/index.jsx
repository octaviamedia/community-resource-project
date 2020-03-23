import React from "react";
import {Image, Button} from "react-bootstrap";


const Banner = ({img, buttons}) => {
  return (
    <div className="banner">
      <Image src={img}/>
      <div className = "banner-btn-cont">
        {buttons && buttons.map((button) => (
          <Button className="banner-buttons">
            <span>{button.text}</span>
          </Button>
        ))}
      </div>
    </div>
  )
};

export default Banner;
