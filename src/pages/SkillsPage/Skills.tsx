import React from "react";
import Layout from "../../layouts/Layout";
import ChartsAndRecommendations from "./ChartsAndRecommendations/ChartsAndRecommendations";
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
        <ChartsAndRecommendations />
      </div>
    </Layout>
  );
};

export default Skills;
