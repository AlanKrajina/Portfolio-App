import React from "react";
import { InitialImagesState } from "../../../data/appData";
import { styles } from "../workStyles";

interface AppProps {
  workApp: InitialImagesState;
}

const WorkApp: React.FC<AppProps> = ({ workApp }) => {
  return (
    <div style={styles.WorkAppDiv}>
      <p style={styles.WorkAppTitle}>{workApp.name}</p>

      <div style={styles.WorkAppsSectionDiv}>
        <div style={styles.WorkAppSummaryDiv}>
          {workApp.summary.map((summary, key) => {
            return <p style={styles.WorkAppParagraph}>{summary}</p>;
          })}
        </div>

        <div style={styles.WorkAppIFrameImgDiv}>
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
      </div>
    </div>
  );
};

export default WorkApp;
