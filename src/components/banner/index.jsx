import React from "react";
import {Image, Button} from "react-bootstrap";
import BannerLayover from "../textLayovers";
import Link from "next/link";


const Banner = ({img, buttons, title}) => {
  return (
    <div className="banner">
      <Image src={img}/>

      <div className = "banner-btn-cont">
        {title&&<BannerLayover
          text={title}
        />}
        {buttons && buttons.map((button) => (

          <a href="https://www.facebook.com/TheCommunityResourceProject/">
            <Button className="banner-buttons">
              <span>{button.text}</span>
            </Button>
          </a>
        ))}
      </div>
    </div>
  )
};

export default Banner;
