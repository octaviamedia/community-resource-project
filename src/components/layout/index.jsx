import React from "react";
import MainNavbar from "../navbar";
import Meta from "../meta";
import Footer from "../footer";
import Banner from "../banner";
import siteMap from "../../data/siteMap";
import CookieConsent from "react-cookie-consent";
import "../../styles/main.scss";

const MainLayout = ({children, banner}) => (
  <div>
    <Meta/>
    <CookieConsent
      style={{ background: "#F7D1B6", fontSize:"1em", color:"black"}}
      buttonStyle={{background:"#0D2647", color:"white", fontSize:"1em"}}
      containerClasses="alert alert-warning col-lg-12"
      >
      The Community Resource Project was created through Octavia
      Social Media Strategies to provide support and resources to the
      community.
      We have volunteered our time to create this project in order to
      bring the Tucson community together. <br></br> <br></br>
      We do not endorse any of the links found on this website or
      the companies where the information is coming from.
      The links have been vetted out to the best of our ability to make
      sure that they are reliable sources; however, we strongly
      advise you to do your own research as well. <br></br> <br></br>
      We thank you so much for visiting our site and choosing us
      to be a resource.
    </CookieConsent>
    <body>
      <MainNavbar
        navItems = {siteMap}
      />
      {banner && <Banner {...banner} />}
      <div>
        {children}
      </div>
      <Footer
        navItems = {siteMap}
      />
    </body>
  </div>
);

export default MainLayout;
