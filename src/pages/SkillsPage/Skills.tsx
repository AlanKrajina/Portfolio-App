import React, { useEffect, useContext } from "react";
import Layout from "../../layouts/Layout";
import animateTitle from "../../helpers/animateTitle";
import SkillsCharts from "./SkillsCharts/SkillsCharts";
import { styles } from "./skillsStyles";
import SkillsText from "./SkillsText/SkillsText";
import { MediaQueryContext } from "../../App";

const Skills: React.FC = () => {
  const isDesktop = useContext(MediaQueryContext);

  useEffect(() => {
    animateTitle("skillsTitle", "Skills & Experience");
  }, []);

  return (
    <Layout>
      <p
        id="skillsTitle"
        style={
          isDesktop
            ? { ...styles.Title }
            : { ...styles.Title, fontSize: "3rem" }
        }
      />
      <div style={styles.SkillsDiv}>
        <SkillsText />
        <SkillsCharts />
      </div>
    </Layout>
  );
};

export default Skills;
