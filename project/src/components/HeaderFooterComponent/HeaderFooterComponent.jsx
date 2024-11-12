import { Outlet } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

import IntroImage from "../IntroImage/IntroImage";
import CheckpointsComponent from "../CheckpointsComponent/CheckpointsComponent";
import ServicesListComponent from "../ServicesListComponent/ServicesListComponent";

function HeaderFooterLayout() {
  return (
    <>
      <HeaderComponent />

      <IntroImage />
      <CheckpointsComponent />
      <ServicesListComponent />

      <Outlet />
      <div className="footer-padding">-</div>
      <FooterComponent />
    </>
  );
}

export default HeaderFooterLayout;