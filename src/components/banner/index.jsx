import React from "react";
import {Image, Button} from "react-bootstrap";
import Link from "next/link";


const Banner = ({img, buttons, title}) => {
  return (
    <div className="banner">
      <Image src={img}/>

      <div className = "banner-btn-cont">
        {buttons && buttons.map((button) => (
          <Link href={button.ref}>
            <Button className="banner-buttons">
              <span>{button.text}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Banner;
