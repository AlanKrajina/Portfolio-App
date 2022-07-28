import React, { useContext } from "react";
import "../../../../helpers/animations.css";
import { styles } from "../skillsChartsStyles";
import { MediaQueryContext } from "../../../../App";

const Skills: React.FC = () => {
  const { isDesktop } = useContext(MediaQueryContext);

  return (
    <div>
      <article style={styles.Row}>
        <ul style={styles.UnorderedList}>
          <li>
            <h3 style={isDesktop ? styles.Title : styles.MobileTitle}>
              HTML/HTML5
            </h3>
            <div
              style={
                isDesktop
                  ? styles.BarDiv
                  : { ...styles.BarDiv, height: "15px", marginBottom: "15px" }
              }
            >
              <span
                style={
                  isDesktop
                    ? {
                        ...styles.BarSpan,
                        backgroundColor: "#e13c4c",
                        width: "87%",
                      }
                    : {
                        ...styles.BarSpan,
                        backgroundColor: "#e13c4c",
                        width: "87%",
                        height: "15px",
                      }
                }
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={isDesktop ? styles.Title : styles.MobileTitle}>
              CSS/CSS3
            </h3>
            <div
              style={
                isDesktop
                  ? styles.BarDiv
                  : { ...styles.BarDiv, height: "15px", marginBottom: "15px" }
              }
            >
              <span
                style={
                  isDesktop
                    ? {
                        ...styles.BarSpan,
                        backgroundColor: "#ffdb43",
                        width: "83%",
                      }
                    : {
                        ...styles.BarSpan,
                        backgroundColor: "#ffdb43",
                        width: "83%",
                        height: "15px",
                      }
                }
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={isDesktop ? styles.Title : styles.MobileTitle}>
              JavaScript
            </h3>
            <div
              style={
                isDesktop
                  ? styles.BarDiv
                  : { ...styles.BarDiv, height: "15px", marginBottom: "15px" }
              }
            >
              <span
                style={
                  isDesktop
                    ? {
                        ...styles.BarSpan,
                        backgroundColor: "#3498db",
                        width: "84%",
                      }
                    : {
                        ...styles.BarSpan,
                        backgroundColor: "#3498db",
                        width: "84%",
                        height: "15px",
                      }
                }
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={isDesktop ? styles.Title : styles.MobileTitle}>React</h3>
            <div
              style={
                isDesktop
                  ? styles.BarDiv
                  : { ...styles.BarDiv, height: "15px", marginBottom: "15px" }
              }
            >
              <span
                style={
                  isDesktop
                    ? {
                        ...styles.BarSpan,
                        backgroundColor: "#2ecc71",
                        width: "94%",
                      }
                    : {
                        ...styles.BarSpan,
                        backgroundColor: "#2ecc71",
                        width: "94%",
                        height: "15px",
                      }
                }
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
        </ul>
      </article>
      <article style={styles.Row}>
        <ul>
          <li>
            <h3 style={isDesktop ? styles.Title : styles.MobileTitle}>Redux</h3>
            <div
              style={
                isDesktop
                  ? styles.BarDiv
                  : { ...styles.BarDiv, height: "15px", marginBottom: "15px" }
              }
            >
              <span
                style={
                  isDesktop
                    ? {
                        ...styles.BarSpan,
                        backgroundColor: "#a94034",
                        width: "91%",
                      }
                    : {
                        ...styles.BarSpan,
                        backgroundColor: "#a94034",
                        width: "91%",
                        height: "15px",
                      }
                }
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={isDesktop ? styles.Title : styles.MobileTitle}>
              TypeScript
            </h3>
            <div
              style={
                isDesktop
                  ? styles.BarDiv
                  : { ...styles.BarDiv, height: "15px", marginBottom: "15px" }
              }
            >
              <span
                style={
                  isDesktop
                    ? {
                        ...styles.BarSpan,
                        backgroundColor: "#ff8137",
                        width: "81%",
                      }
                    : {
                        ...styles.BarSpan,
                        backgroundColor: "#ff8137",
                        width: "81%",
                        height: "15px",
                      }
                }
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={isDesktop ? styles.Title : styles.MobileTitle}>Jest</h3>
            <div
              style={
                isDesktop
                  ? styles.BarDiv
                  : { ...styles.BarDiv, height: "15px", marginBottom: "15px" }
              }
            >
              <span
                style={
                  isDesktop
                    ? {
                        ...styles.BarSpan,
                        backgroundColor: "#0cbfb3",
                        width: "77%",
                      }
                    : {
                        ...styles.BarSpan,
                        backgroundColor: "#0cbfb3",
                        width: "77%",
                        height: "15px",
                      }
                }
                className="animated fadeInLeft"
              ></span>
            </div>
          </li>
          <li>
            <h3 style={isDesktop ? styles.Title : styles.MobileTitle}>
              Svelte
            </h3>
            <div
              style={
                isDesktop
                  ? styles.BarDiv
                  : { ...styles.BarDiv, height: "15px", marginBottom: "15px" }
              }
            >
              <span
                style={
                  isDesktop
                    ? {
                        ...styles.BarSpan,
                        backgroundColor: "#206c40",
                        width: "82%",
                      }
                    : {
                        ...styles.BarSpan,
                        backgroundColor: "#206c40",
                        width: "82%",
                        height: "15px",
                      }
                }
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
