import React, { useState } from "react";
import { styles } from "./summaryStyles";
import coding from "./gif/coding.gif";
import useScrollTrigger from "../../../hooks/use-scrollTrigger";
import "../../../helpers/animations.css";

const SummarySection: React.FC = () => {
  const [showGif, setShowGif] = useState<boolean>(false);

  useScrollTrigger("summaryTitle", "Summary", "#summarySection", () =>
    setShowGif(true)
  );

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
        <div style={styles.GifDiv}>
          {showGif && (
            <img
              style={styles.Gif}
              src={coding}
              alt="coding"
              className="animated fadeInUp"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
