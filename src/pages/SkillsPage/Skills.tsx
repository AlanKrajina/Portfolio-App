import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import animateTitle from "../../helpers/animateTitle";
import SkillsCharts from "./SkillsCharts/SkillsCharts";
import { styles } from "./skillsStyles";
import SkillsText from "./SkillsText/SkillsText";

const Skills: React.FC = () => {
  useEffect(() => {
    animateTitle("skillsTitle", "Skills");
  }, []);

  return (
    <Layout>
      <p id="skillsTitle" style={styles.Title} />
      <div style={styles.SkillsDiv}>
        <SkillsText />
        <SkillsCharts />
      </div>
    </Layout>
  );
};

export default Skills;
