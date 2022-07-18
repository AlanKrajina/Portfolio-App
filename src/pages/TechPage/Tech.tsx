import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { styles } from "./techStyles";
import animateTitle from "../../helpers/animateTitle";

const Tech: React.FC = () => {
  useEffect(() => {
    animateTitle("techTitle", "App Technologies");
  }, []);

  return (
    <Layout>
      <p id="techTitle" style={styles.Title} />
    </Layout>
  );
};

export default Tech;
