import { introText, Intro } from "../../../data/appData";

const initialBounce = (span: HTMLSpanElement) => {
  span.style.transform = "scale(1.3)";
  span.style.color = "#08fdd8";
  setTimeout(function () {
    span.removeAttribute("style");
  }, 300);
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

export const showIntro = (): void => {
  let delay = 55;
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
      delay += 55;
    });
  });
};
