import React from "react";
import MainNavbar from "../navbar";
import Meta from "../meta";
import Footer from "../footer";
import siteMap from "../../data/siteMap";
import "../../styles/main.scss";

const MainLayout = ({children}) => (
  <div>
    <Meta/>
    <MainNavbar
      navItems = {siteMap}
    />
    <div>
      {children}
    </div>
    <Footer
      navItems = {siteMap}
    />
  </div>
);

export default MainLayout;
