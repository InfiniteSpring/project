import { Outlet } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

import IntroImage from "../IntroImage/IntroImage";
import CheckpointsComponent from "../CheckpointsComponent/CheckpointsComponent";
import ServicesListComponent from "../ServicesListComponent/ServicesListComponent";
import HelpYouComponent from "../HelpYouService/HelpYouComponent";
import IndustriesListComponent from "../IndustriesListComponent/IndustriesListComponent";
import TechDomainsComponent from "../TechDomainsComponent/TechDomainsComponent";

function HeaderFooterLayout() {
  return (
    <>
      <HeaderComponent />

      <IntroImage />
      <CheckpointsComponent />
      <ServicesListComponent />
      <TechDomainsComponent />
      <HelpYouComponent />
      <IndustriesListComponent />


      <Outlet />
      <div style={{ height: "100px" }}></div>
      {/* <div className="footer-padding">-</div> */}
      <FooterComponent />
    </>
  );
}

export default HeaderFooterLayout;