import CustomLink from "./CustomLink"
import { styles } from "./navbarStyles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from 'react';

const NavBar: React.FC = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger:{
        trigger: "#wrap",
        pin: true,
        scrub:0.2,
        start: 'top top',
        end:'+=10000',
      }
    })
    .to('#logo', {
      rotation:360*5,
      duration:1, ease:'none',
    })
  }, []);

  return (
    <main style={styles.Navbar}>
      <header style={styles.Header}>
        <div id="wrap" style={styles.Wrap}>
          <img style={styles.Logo} id="logo" src='/images/reactIcon.jpg' alt="logo" />
        </div>
        <div style={styles.TitleDiv}>
          <p style={styles.Name}>Alan</p>
          <span style={styles.Title}>Portfolio App</span>          
        </div>
      </header>
      <nav style={styles.Nav}>
        <hr style={styles.Hr}/>
        <CustomLink to="/">Home</CustomLink>
        <hr style={styles.Hr}/>
        <CustomLink to="/about">About</CustomLink>  
        <hr style={styles.Hr}/>      
      </nav>
      <footer style={styles.Footer}>
        <img style={styles.FooterIcons} src='/images/linkedin.svg' alt="linkedin"/>
      </footer>
    </main>
  )
}
export default NavBar;