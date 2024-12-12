import { Outlet } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

import IntroImage from "../IntroImage/IntroImage";
import CheckpointsComponent from "../CheckpointsComponent/CheckpointsComponent";
import ServicesListComponent from "../ServicesListComponent/ServicesListComponent";
import HelpYouComponent from "../HelpYouService/HelpYouComponent";
import TechDomainsComponent from "../TechDomainsComponent/TechDomainsComponent";

import IndustriesComponent from "../IndustriesComponent/IndustriesComponent";
import ContactUsComponent from "../ContactUsComponenet/ContactUsComponent";

function HeaderFooterLayout() {
  return (
    <>
      <HeaderComponent />
      
      <IntroImage />
      <CheckpointsComponent />
      <TechDomainsComponent />
      <HelpYouComponent />
      <ServicesListComponent />

      <IndustriesComponent />
      <ContactUsComponent />

      <Outlet />
      <div style={{ height: "100px" }}></div>
      {/* <div className="footer-padding">-</div> */}
      <FooterComponent />
    </>
  );
}

export default HeaderFooterLayout;