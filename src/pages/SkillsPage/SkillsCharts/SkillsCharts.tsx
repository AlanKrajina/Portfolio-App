import React from "react";
import "../../../helpers/animations.css";
import Charts from "./Charts";
import RecommendationAndInterview from "./RecommendationAndInterview";
import { styles } from "./skillsChartsStyles";

const SkillsCharts: React.FC = () => {
  return (
    <div style={styles.Section}>
      <Charts />
      <RecommendationAndInterview />
    </div>
  );
};

export default SkillsCharts;
