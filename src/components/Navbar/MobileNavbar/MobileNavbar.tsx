import React, { useContext } from "react";
import CustomLink from "../../CustomLink/CustomLink";
import { styles } from "./mobileNavbarStyles";
import { MediaQueryContext } from "../../../App";
import useAnimatedLogo from "../../../hooks/use-animatedLogo";

const MobileNavbar: React.FC = () => {
  const { isDesktop } = useContext(MediaQueryContext);
  useAnimatedLogo();

  return (
    <main style={styles.MobileNavbar}>
      <header style={isDesktop ? styles.Header : styles.MobileHeader}>
        <img
          style={styles.Logo}
          id="logo"
          src="/images/reactIcon.jpg"
          alt="logo"
        />
      </header>
      <nav style={isDesktop ? styles.NavItems : styles.MobileNavItems}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/skills">Skills</CustomLink>
        <CustomLink to="/work">Work</CustomLink>
        <CustomLink to="/game">Redux Game</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
      <footer style={isDesktop ? styles.Footer : styles.MobileFooter}>
        <a
          href="https://www.linkedin.com/in/alankrajina/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa fa-linkedin"
            style={isDesktop ? styles.FooterIcons : styles.MobileFooterIcons}
          ></i>
        </a>

        <a
          href="https://github.com/AlanKrajina"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa fa-github"
            style={isDesktop ? styles.FooterIcons : styles.MobileFooterIcons}
          ></i>
        </a>
      </footer>
    </main>
  );
};
export default MobileNavbar;
