import React from "react";
import {Image} from "react-bootstrap";


const Banner = ({img, title, buttonText }) => {
  return (
    <div className="banner">
      <Image src={img} fluid/>
      {title && <h1>{title}</h1>}
    </div>
  )
};

export default Banner;
