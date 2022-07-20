import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { styles } from "./aboutStyles";
import animateTitle from "../../helpers/animateTitle";

const About: React.FC = () => {
  useEffect(() => {
    animateTitle("aboutTitle", "About");
  }, []);

  return (
    <Layout>
      <p id="aboutTitle" style={styles.Title} />
      {/* dodat sve iz L */}
    </Layout>
  );
};

export default About;
