import CustomLink from "./CustomLink";
import { styles } from "./navbarStyles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";

const NavBar: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#wrap",
          pin: true,
          scrub: 0.2,
          start: "top top",
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
    <main style={styles.Navbar}>
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
      <nav style={styles.Nav}>
        <hr style={styles.Hr} />
        <CustomLink to="/">Home</CustomLink>
        <hr style={styles.Hr} />
        <CustomLink to="/about">Work</CustomLink>
        <hr style={styles.Hr} />
        <CustomLink to="/about">Skills</CustomLink>
        <hr style={styles.Hr} />
        <CustomLink to="/about">Portfolio Tech</CustomLink>
        <hr style={styles.Hr} />
        <CustomLink to="/about">Redux Game</CustomLink>
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
          <img
            style={styles.FooterIcons}
            src="/images/linkedin.svg"
            alt="linkedin"
          />
        </a>

        <a
          href="https://github.com/AlanKrajina"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={styles.FooterIcons}
            src="/images/github.svg"
            alt="github"
          />
        </a>
      </footer>
    </main>
  );
};
export default NavBar;
