import { Outlet } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

import IntroImage from "../IntroImage/IntroImage";
import CheckpointsComponent from "../CheckpointsComponent/CheckpointsComponent";
import ServicesListComponent from "../ServicesListComponent/ServicesListComponent";
import HelpYouComponent from "../HelpYouService/HelpYouComponent";

function HeaderFooterLayout() {
  return (
    <>
      <HeaderComponent />

      <IntroImage />
      <CheckpointsComponent />
      <ServicesListComponent />
      <HelpYouComponent />

      <Outlet />
      {/* <div className="footer-padding">-</div> */}
      <FooterComponent />
    </>
  );
}

export default HeaderFooterLayout;