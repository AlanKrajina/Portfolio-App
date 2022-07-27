import React, { useContext } from "react";
import "../Home.css";
import { styles } from "./introStyles";
import MouseScroll from "../../../components/MouseScroll/MouseScroll";
import "../../../helpers/animations.css";
import { MediaQueryContext } from "../../../App";
import useParticleEffect from "../../../hooks/use-particleEffect";

const IntroSection: React.FC = () => {
  const { isDesktop, isLargeScreen } = useContext(MediaQueryContext);

  useParticleEffect();

  return (
    <div style={styles.MainDiv}>
      <div id="particle-canvas" style={styles.ParticleCanvas} />
      <div
        id="firstSection"
        style={
          isDesktop
            ? { ...styles.IntroSection, fontSize: "5.6rem" }
            : { ...styles.IntroSection, fontSize: "3rem" }
        }
      />
      <div
        id="secondSection"
        style={
          isDesktop
            ? { ...styles.IntroSection, top: "37vh", fontSize: "5.6rem" }
            : {
                ...styles.IntroSection,
                top: "35vh",
                fontSize: "3rem",
                minWidth: "15rem",
              }
        }
      />
      <div
        id="thirdSection"
        style={
          isDesktop
            ? {
                ...styles.IntroSection,
                top: "48vh",
                fontSize: "5.6rem",
                width: isLargeScreen ? "fit-content" : "33rem",
              }
            : {
                ...styles.IntroSection,
                top: "44vh",
                fontSize: "3rem",
                width: "21rem",
                padding: "0 1rem 0 1rem",
              }
        }
      />
      <div id="fourthSection" style={{ ...styles.IntroSection, top: "75vh" }} />
      <MouseScroll />
    </div>
  );
};

export default IntroSection;
