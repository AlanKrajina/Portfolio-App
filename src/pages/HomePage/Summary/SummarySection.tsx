import React, { useEffect, useCallback } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { styles } from "./summaryStyles";
import coding from "./gif/coding.gif";

const SummarySection: React.FC = () => {
  const renderSection = useCallback(() => {
    const title = document.getElementById("summaryTitle");
    if (title) {
      title.setAttribute("id", "typewriterEffect");
      title.innerHTML = "Summary";
    }
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#summarySection",
      onEnter: renderSection,
    });
  }, [renderSection]);

  return (
    <div style={styles.Section}>
      <p id="summaryTitle" className="titleTypewriter" style={styles.Title} />
      <div id="summarySection" style={styles.TextGifDiv}>
        <div style={styles.TextDiv}>
          <p style={styles.Text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p style={styles.Text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p style={styles.Text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <img style={styles.Gif} src={coding} alt="coding" />
      </div>
    </div>
  );
};

export default SummarySection;
