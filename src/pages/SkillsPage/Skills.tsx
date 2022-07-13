import React from "react";
import SkillsCharts from "./SkillsCharts/SkillsCharts";
import { styles } from "./skillsStyles";
import SkillsText from "./SkillsText/SkillsText";

const Skills: React.FC = () => {
  return (
    <div style={styles.Section}>
      <p style={styles.Title}>Skills</p>
      <div style={styles.SkillsDiv}>
        <SkillsText />
        <SkillsCharts />
      </div>
    </div>
  );
};

export default Skills;
