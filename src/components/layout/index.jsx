import React from "react";
import MainNavbar from "../navbar";
import Meta from "../meta";
import Footer from "../footer";
import Banner from "../banner";
import siteMap from "../../data/siteMap";
import "../../styles/main.scss";

const MainLayout = ({children, banner}) => (
  <div>
    <Meta/>
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
