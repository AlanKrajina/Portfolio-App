import CustomLink from "../../CustomLink/CustomLink";
import { styles } from "./desktopNavbarStyles";
import React from "react";
import useAnimatedLogo from "../../../hooks/use-animatedLogo";

const DesktopNavbar: React.FC = () => {
  useAnimatedLogo();

  return (
    <main style={styles.DesktopNavbar}>
      <header style={styles.Header}>
        <img
          style={styles.Logo}
          id="logo"
          src="/images/reactIcon.jpg"
          alt="logo"
        />
        <div style={styles.TitleDiv}>
          <p>Portfolio</p>
          <span style={styles.Title}>App</span>
        </div>
      </header>
      <nav style={styles.NavItems}>
        <hr style={styles.Hr} />
        <CustomLink to="/">Home</CustomLink>
        <hr style={styles.Hr} />
        <CustomLink to="/skills">Skills</CustomLink>
        <hr style={styles.Hr} />
        <CustomLink to="/work">Work</CustomLink>
        <hr style={styles.Hr} />
        <CustomLink to="/game">Redux Game</CustomLink>
        <hr style={styles.Hr} />
        <CustomLink to="/about">About</CustomLink>
        <hr style={styles.Hr} />
      </nav>
      <footer style={styles.Footer}>
        <a
          href="https://www.linkedin.com/in/alankrajina/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin" style={styles.FooterIcons}></i>
        </a>

        <a
          href="https://github.com/AlanKrajina"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github" style={styles.FooterIcons}></i>
        </a>
      </footer>
    </main>
  );
};
export default DesktopNavbar;
