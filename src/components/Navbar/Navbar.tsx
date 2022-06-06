import CustomLink from "./CustomLink"
import './Navbar.css';
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
    <main className="navbar">
      <header>
        <div id="wrap">
          <img className="logo" id="logo" src='/images/reactIcon.jpg' alt="logo" />
        </div>
        <div className="titleDiv">
          <p className="name">Alan</p>
          <span className="title">Frontend Developer</span>          
        </div>
      </header>
      <nav>
        <hr/>
        <CustomLink to="/">Home</CustomLink>
        <hr/>
        <CustomLink to="/about">About</CustomLink>  
        <hr/>      
      </nav>
      <footer>
        <img className="footerIcons"src='/images/linkedin.svg' alt="linkedin"/>
      </footer>
    </main>
  )
}
export default NavBar;