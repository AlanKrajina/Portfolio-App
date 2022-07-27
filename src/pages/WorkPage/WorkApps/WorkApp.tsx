import React, { useState, useEffect, useContext } from "react";
import { InitialImagesState } from "../../../data/appData";
import { styles } from "../workStyles";
import PacmanLoader from "react-spinners/PacmanLoader";
import _ from "lodash";
import "../../../helpers/animations.css";
import { MediaQueryContext } from "../../../App";

interface AppProps {
  workApp: InitialImagesState;
}

const WorkApp: React.FC<AppProps> = ({ workApp }) => {
  const { isDesktop } = useContext(MediaQueryContext);

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div style={styles.WorkAppDiv}>
      <p style={styles.WorkAppTitle}>{workApp.name}</p>

      <div style={styles.WorkAppsSectionDiv}>
        <div style={styles.WorkAppSummaryDiv}>
          {workApp.summary.map((summary) => {
            return (
              <p style={styles.WorkAppParagraph} key={_.uniqueId()}>
                {summary}
              </p>
            );
          })}

          {workApp.youTubeSource !== "" ? (
            <p style={styles.Link}>
              <a href={workApp.youTubeSource} target="_blank" rel="noreferrer">
                YouTube Link
              </a>
            </p>
          ) : (
            ""
          )}

          {workApp.gitHubSource !== "" ? (
            <p style={styles.Link}>
              <a href={workApp.gitHubSource} target="_blank" rel="noreferrer">
                GitHub Link
              </a>
            </p>
          ) : (
            ""
          )}
        </div>
        {loading ? (
          <div
            style={{
              ...styles.WorkAppIFrameImgDiv,
              paddingLeft: "20px 50px 20px 10vw",
            }}
          >
            <div
              style={
                isDesktop
                  ? styles.PacmanDiv
                  : { ...styles.PacmanDiv, width: "10rem" }
              }
            >
              <PacmanLoader color={"#08fdd8"} loading={loading} size={20} />
            </div>
          </div>
        ) : (
          <div
            style={{
              ...styles.WorkAppIFrameImgDiv,
              padding: "20px 50px 20px 0",
            }}
          >
            {workApp.youTubeSource !== "" &&
            workApp.name !== "Hub App Asset Creation" ? (
              <iframe
                src={workApp.youTubeSource}
                width={isDesktop ? "600" : "300"}
                height="300"
                title={workApp.name}
                className="animated fadeInLeft50"
              ></iframe>
            ) : (
              <img
                src={workApp.image}
                alt="portfolioImage"
                className="animated fadeInLeft50"
                style={isDesktop ? { height: "300px" } : { height: "280px" }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkApp;
