import { Outlet } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

import IntroImage from "../IntroImage/IntroImage";
import CheckpointsComponent from "../CheckpointsComponent/CheckpointsComponent";
import ServicesListComponent from "../ServicesListComponent/ServicesListComponent";
import HelpYouComponent from "../HelpYouService/HelpYouComponent";
import TechDomainsComponent from "../TechDomainsComponent/TechDomainsComponent";
import ContactUsComponent from "../ContactUsComponenet/ContactUsComponent";

import AboutComponent from "../AboutComponent/AboutComponent";

function HeaderFooterLayout() {
  return (
    <>
      <HeaderComponent />
      
      <IntroImage />
      <CheckpointsComponent />
      <TechDomainsComponent />
      <HelpYouComponent />
      <ServicesListComponent />

      <AboutComponent />

      <ContactUsComponent />

      <Outlet />
      {/* <div style={{ height: "100px" }}></div> */}
      {/* <div className="footer-padding">-</div> */}
      <FooterComponent />
    </>
  );
}

export default HeaderFooterLayout;