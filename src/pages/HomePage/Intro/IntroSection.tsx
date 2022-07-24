import React, { useEffect, useContext } from "react";
import "../Home.css";
import { styles } from "./introStyles";
import { ParticleNetwork } from "../../../helpers/canvas.js";
import MouseScroll from "../../../components/MouseScroll/MouseScroll";
import { introText, Intro, introOptions } from "../../../data/appData";
import "../../../helpers/animations.css";
import { MediaQueryContext } from "../../../App";

const IntroSection: React.FC = () => {
  const { isDesktop, isHalfScreen } = useContext(MediaQueryContext);

  useEffect(() => {
    new ParticleNetwork(
      document.getElementById("particle-canvas"),
      introOptions
    );
    setTimeout(function () {
      showIntro();
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialBounce = (span: HTMLSpanElement) => {
    span.style.transform = "scale(1.3)";
    span.style.color = "#08fdd8";
    setTimeout(function () {
      span.removeAttribute("style");
    }, 300);
  };

  const showIntro = (): void => {
    let delay = 70;
    introText.forEach((e) => {
      const section = document.getElementById(e.elementId);
      e.title.forEach((el, index) => {
        setTimeout(function () {
          appendSpan(e, el, section, index);
          if (e.elementId === "thirdSection" && index === e.title.length - 1) {
            appendParagraph();
            appendButton();
          }
        }, delay);
        delay += 80;
      });
    });
  };

  const appendSpan = (
    e: Intro,
    el: string,
    section: HTMLElement | null,
    index: number
  ) => {
    const span = document.createElement("span");
    span.className = "hoverBounce";
    if (e.elementId === "secondSection" && index === 4) {
      span.classList.add("introSectionTitle");
    }
    span.innerHTML = el;
    initialBounce(span);
    section?.append(span);
  };

  const appendButton = () => {
    const buttonSection = document.getElementById("fourthSection");
    const b = document.createElement("button");
    b.className = "contactButton";
    b.textContent = "Contact Me";
    b.onclick = function () {
      window.scrollTo(0, document.body.scrollHeight);
    };

    buttonSection?.append(b);
  };

  const appendParagraph = () => {
    const section = document.getElementById("thirdSection");
    const p = document.createElement("p");
    p.className = "introSectionParagraph";
    p.innerHTML = "Front End Developer / React || Svelte";
    p.classList.add("animated");
    p.classList.add("fadeInUp");
    section?.append(p);
  };

  return (
    <div style={styles.MainDiv}>
      <div id="particle-canvas" style={styles.ParticleCanvas} />
      <div
        id="firstSection"
        style={
          isDesktop
            ? { ...styles.IntroSection, fontSize: "5.6rem" }
            : { ...styles.IntroSection, fontSize: "4rem" }
        }
      />
      <div
        id="secondSection"
        style={
          isDesktop
            ? { ...styles.IntroSection, top: "37vh", fontSize: "5.6rem" }
            : { ...styles.IntroSection, top: "35vh", fontSize: "4rem" }
        }
      />
      <div
        id="thirdSection"
        style={
          isDesktop
            ? {
                ...styles.IntroSection,
                top: "49vh",
                fontSize: "5.6rem",
                width: isHalfScreen ? "fit-content" : "33rem",
                /*                 minWidth: "33rem",
                 */
              }
            : {
                ...styles.IntroSection,
                top: "45vh",
                fontSize: "4rem",
                width: "26rem",
              }
        }
      />
      <div id="fourthSection" style={{ ...styles.IntroSection, top: "75vh" }} />
      <MouseScroll />
    </div>
  );
};

export default IntroSection;
