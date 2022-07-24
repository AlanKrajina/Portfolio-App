import React, { useState, useEffect } from "react";
import { InitialImagesState } from "../../../data/appData";
import { styles } from "../workStyles";
import PacmanLoader from "react-spinners/PacmanLoader";
import _ from "lodash";
import "../../../helpers/animations.css";

interface AppProps {
  workApp: InitialImagesState;
}

const WorkApp: React.FC<AppProps> = ({ workApp }) => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={styles.WorkAppDiv} key={_.uniqueId()}>
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
        </div>
        {loading ? (
          <div
            style={{
              ...styles.WorkAppIFrameImgDiv,
              paddingLeft: "20px 50px 20px 10vw",
            }}
          >
            <div style={styles.PacmanDiv}>
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
                width="600"
                height="300"
                title={workApp.name}
                className="animated fadeInLeft50"
              ></iframe>
            ) : (
              <img
                width="600"
                height="300"
                src={workApp.image}
                alt="portfolioImage"
                className="animated fadeInLeft50"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkApp;
