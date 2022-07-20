import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { styles } from "./interviewAppStyles";
import animateTitle from "../../helpers/animateTitle";

const InterviewApp: React.FC = () => {
  useEffect(() => {
    animateTitle("interviewTitle", "Interview App");
  }, []);

  return (
    <Layout>
      <p id="interviewTitle" style={styles.Title} />
    </Layout>
  );
};

export default InterviewApp;
