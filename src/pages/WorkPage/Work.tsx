import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { styles } from "./workStyles";
import animateTitle from "../../helpers/animateTitle";

const Work: React.FC = () => {
  useEffect(() => {
    animateTitle("workTitle", "Work & Experience");
  }, []);

  return (
    <Layout>
      <p id="workTitle" style={styles.Title} />
    </Layout>
  );
};

export default Work;
