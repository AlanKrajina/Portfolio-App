import React, { useEffect } from "react";
import "../Home.css";
import { styles } from "./introStyles";
import { ParticleNetwork } from "../../../helpers/canvas.js";
import MouseScroll from "./MouseScroll/MouseScroll";

interface Options {
  particleColor: string;
  background: string;
  interactive: boolean;
  speed: string;
  density: string;
}

interface Intro {
  elementId: string;
  title: string[];
}

const IntroSection: React.FC = () => {
  useEffect(() => {
    new ParticleNetwork(document.getElementById("particle-canvas"), options);
    setTimeout(function () {
      showIntro();
    }, 400);
  }, []);

  const options: Options = {
    particleColor: "#08fdd8",
    background: "#1d1d1d",
    interactive: true,
    speed: "medium",
    density: "medium",
  };

  const intro: Intro[] = [
    {
      elementId: "firstSection",
      title: ["H", "i", ","],
    },
    {
      elementId: "secondSection",
      title: ["I", `'`, "m", "&nbsp", "A", "l", "a", "n", ","],
    },
    {
      elementId: "thirdSection",
      title: [
        "w",
        "e",
        "l",
        "c",
        "o",
        "m",
        "e",
        "&nbsp",
        "t",
        "o",
        "&nbsp",
        "m",
        "y",
        "&nbsp",
        "P",
        "o",
        "r",
        "t",
        "f",
        "o",
        "l",
        "i",
        "o",
        "&nbsp",
        "A",
        "p",
        "p",
        "&nbsp",
      ],
    },
  ];

  const initialBounce = (span: HTMLSpanElement) => {
    span.style.transform = "scale(1.3)";
    span.style.color = "#08fdd8";
    setTimeout(function () {
      span.removeAttribute("style");
    }, 300);
  };

  const showIntro = (): void => {
    let delay = 70;
    intro.forEach((e) => {
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
    section?.append(p);
  };

  return (
    <div style={styles.MainDiv}>
      <div id="particle-canvas" style={styles.ParticleCanvas} />
      <div id="firstSection" style={styles.IntroSection} />
      <div id="secondSection" style={{ ...styles.IntroSection, top: "37vh" }} />
      <div id="thirdSection" style={{ ...styles.IntroSection, top: "49vh" }} />
      <div id="fourthSection" style={{ ...styles.IntroSection, top: "75vh" }} />
      <MouseScroll />
    </div>
  );
};

export default IntroSection;
