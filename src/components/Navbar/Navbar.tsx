import React, { useContext } from "react";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { MediaQueryContext } from "../../App";

const NavBar: React.FC = () => {
  const { isHalfScreen } = useContext(MediaQueryContext);

  return isHalfScreen ? <DesktopNavbar /> : <MobileNavbar />;
};

export default NavBar;
