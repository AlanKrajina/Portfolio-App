import React, { useContext } from "react";
import "../../../../helpers/animations.css";
import { styles } from "../skillsChartsStyles";
import { MediaQueryContext } from "../../../../App";

const RecommendationAndInterview: React.FC = () => {
  const { isDesktop } = useContext(MediaQueryContext);

  return (
    <div style={styles.RecomAndInterviewDiv}>
      <div
        style={
          isDesktop
            ? styles.InterviewDiv
            : { ...styles.InterviewDiv, fontSize: "0.8rem" }
        }
      >
        <p style={isDesktop ? styles.RITitle : styles.MobileRITitle}>
          Recommendation
        </p>
        <br></br>
        <p>Adam Secker</p>
        <p>Senior Developer at Agent3: End-to-end Account-based Marketing</p>
        <br></br>
        <p>June 14, 2022, Adam managed Alan directly</p>
        <br></br>
        <p style={isDesktop ? styles.RIText : styles.MobileRIText}>
          Alan has lots of potential. He has a unique perspective that leads to
          creative solutions, and works diligently to produce work that reflects
          the designs. It has been a pleasure to work with Alan during his time
          at Agent3.
        </p>
        <p style={isDesktop ? styles.RILink : styles.MobileRILink}>
          <a
            href={"https://www.linkedin.com/in/alankrajina"}
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/alankrajina
          </a>
        </p>
      </div>
      <div style={styles.RecommendationDiv}>
        <p style={isDesktop ? styles.RITitle : styles.MobileRITitle}>
          Junior React Developer mock interview with Skilled after Flatiron
          School
        </p>
        <br></br>
        <p style={isDesktop ? styles.RIText : styles.MobileRIText}>
          Alan and I had a great conversation this morning. He was very
          personable and well-spoken. I appreciated his comments and thoughts on
          the projects he has worked on while at Flatiron. He had a handful of
          questions for me during and after the interview. This is something I
          appreciate in candidates as it shows that they are engaged in the
          interview and the conversation. We were able to get through a number
          of questions about React, React intricacies and “gotchas”, and a
          problem involving the creation of a basic React component. Alan was
          able to comfortably and confidently answer almost every question and
          work through the basic component. Overall, I’d say very well done! I
          would absolutely rate his React skills and knowledge as more than
          sufficient for a junior developer role.
        </p>

        <p style={isDesktop ? styles.RILink : styles.MobileRILink}>
          <a
            href={"https://api.skilledinc.com/report-card/3349"}
            target="_blank"
            rel="noreferrer"
          >
            https://api.skilledinc.com/report-card/3349
          </a>
        </p>
      </div>
    </div>
  );
};

export default RecommendationAndInterview;
