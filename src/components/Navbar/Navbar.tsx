import React from "react";
import useMediaQuery from "../../hooks/use-mediaQuery";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const NavBar: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default NavBar;
