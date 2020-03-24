import React from 'react';
import Link from "next/link";


const FacebookLogo = () => (
  <div className="social-btn">
  <Link href="https://www.facebook.com/TheCommunityResourceProject/">
    <a className="fa fa-facebook"></a>
  </Link>
  </div>
);

const InstagramLogo = () => (
  <div className="social-btn">
    <a href="#" className="fa fa-instagram"></a>
  </div>
);

export {FacebookLogo, InstagramLogo};
