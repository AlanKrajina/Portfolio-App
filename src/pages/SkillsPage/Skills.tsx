import React from "react";
import Layout from "../../layouts/Layout";
import SkillsCharts from "./SkillsCharts/SkillsCharts";
import { styles } from "./skillsStyles";
import SkillsText from "./SkillsText/SkillsText";

const Skills: React.FC = () => {
  return (
    <Layout
      headerStyle={styles.Title}
      headerId="skillsTitle"
      headerTitle="Skills and Experience"
    >
      <div style={styles.SkillsDiv}>
        <SkillsText />
        <SkillsCharts />
      </div>
    </Layout>
  );
};

export default Skills;
