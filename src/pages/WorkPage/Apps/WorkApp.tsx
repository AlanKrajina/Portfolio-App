import React, { useState, useEffect } from "react";
import { InitialImagesState } from "../../../data/appData";
import { styles } from "../workStyles";
import PacmanLoader from "react-spinners/PacmanLoader";

interface AppProps {
  workApp: InitialImagesState;
  keyVal: number;
}

const WorkApp: React.FC<AppProps> = ({ workApp, keyVal }) => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={styles.WorkAppDiv} key={keyVal}>
      <p style={styles.WorkAppTitle}>{workApp.name}</p>

      <div style={styles.WorkAppsSectionDiv}>
        <div style={styles.WorkAppSummaryDiv}>
          {workApp.summary.map((summary, index) => {
            return (
              <p style={styles.WorkAppParagraph} key={index}>
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
              minHeight: "21.3rem",
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
              minHeight: "21.3rem",
            }}
          >
            {workApp.youTubeSource !== "" &&
            workApp.name !== "Hub App Asset Creation" ? (
              <iframe
                src={workApp.youTubeSource}
                width="600"
                height="300"
                title={workApp.name}
              ></iframe>
            ) : (
              <img
                width="600"
                height="300"
                src={workApp.image}
                alt="portfolioImage"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkApp;
