import React from "react";
import "../../../helpers/animations.css";
import { styles } from "./skillsChartsStyles";

const Skills: React.FC = () => {
  return (
    <div>
      <article style={styles.Row}>
        <ul style={styles.UnorderedList}>
          <li>
            <h3 style={styles.Title}>HTML/HTML5</h3>
            <div style={styles.BarDiv}>
              <span
                style={{
                  ...styles.BarSpan,
                  backgroundColor: "#e13c4c",
                  width: "85%",
                }}
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={styles.Title}>CSS/CSS3</h3>
            <div style={styles.BarDiv}>
              <span
                style={{
                  ...styles.BarSpan,
                  backgroundColor: "#ffdb43",
                  width: "80%",
                }}
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={styles.Title}>JavaScript</h3>
            <div style={styles.BarDiv}>
              <span
                style={{
                  ...styles.BarSpan,
                  backgroundColor: "#3498db",
                  width: "80%",
                }}
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={styles.Title}>React</h3>
            <div style={styles.BarDiv}>
              <span
                style={{
                  ...styles.BarSpan,
                  backgroundColor: "#2ecc71",
                  width: "89%",
                }}
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
        </ul>
      </article>
      <article style={styles.Row}>
        <ul>
          <li>
            <h3 style={styles.Title}>Redux</h3>
            <div style={styles.BarDiv}>
              <span
                style={{
                  ...styles.BarSpan,
                  backgroundColor: "#a94034",
                  width: "83%",
                }}
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={styles.Title}>TypeScript</h3>
            <div style={styles.BarDiv}>
              <span
                style={{
                  ...styles.BarSpan,
                  backgroundColor: "#ff8137",
                  width: "78%",
                }}
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={styles.Title}>Jest</h3>
            <div style={styles.BarDiv}>
              <span
                style={{
                  ...styles.BarSpan,
                  backgroundColor: "#0cbfb3",
                  width: "70%",
                }}
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={styles.Title}>Svelte</h3>
            <div style={styles.BarDiv}>
              <span
                style={{
                  ...styles.BarSpan,
                  backgroundColor: "#206c40",
                  width: "82%",
                }}
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Skills;
