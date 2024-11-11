import { Outlet } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

import IntroImage from "../IntroImage/IntroImage";

function HeaderFooterLayout() {
  return (
    <>
      <HeaderComponent />
      <IntroImage />
      <Outlet />
      <div className="footer-padding">-</div>
      <FooterComponent />
    </>
  );
}

export default HeaderFooterLayout;