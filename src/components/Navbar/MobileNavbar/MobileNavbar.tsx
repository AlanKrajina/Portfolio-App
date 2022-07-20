import CustomLink from "../../CustomLink/CustomLink";
import { styles } from "./mobileNavbarStyles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";

const MobileNavbar: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#logo",
          scrub: 0.2,
          start: "top bottom",
          end: "+=10000",
        },
      })
      .to("#logo", {
        rotation: 360 * 5,
        duration: 1,
        ease: "none",
      });
  }, []);

  return (
    <main style={styles.MobileNavbar}>
      <header style={styles.Header}>
        <img
          style={styles.Logo}
          id="logo"
          src="/images/reactIcon.jpg"
          alt="logo"
        />
        <div style={styles.TitleDiv}>
          <p>React</p>
          <span style={styles.Title}>Portfolio App</span>
        </div>
      </header>
      <nav style={styles.NavItems}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/skills">Skills</CustomLink>
        <CustomLink to="/work">Work</CustomLink>
        <CustomLink to="/game">Redux Game</CustomLink>
        <CustomLink to="/interviewApp">Interview App</CustomLink>
        <CustomLink to="/about">About</CustomLink>
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
export default MobileNavbar;
