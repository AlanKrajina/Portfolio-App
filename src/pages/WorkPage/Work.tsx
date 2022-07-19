import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { styles } from "./workStyles";
import animateTitle from "../../helpers/animateTitle";
import { initialImages } from "../../data/appData";
import WorkApp from "./Apps/WorkApp";

const Work: React.FC = () => {
  useEffect(() => {
    animateTitle("workTitle", "Work");
  }, []);

  return (
    <Layout>
      <p id="workTitle" style={styles.Title} />
      <div style={styles.Section}>
        {initialImages.map((elem, key) => {
          if (key !== 2 && key !== 4) {
            return <WorkApp workApp={elem} />;
          } else {
            return null;
          }
        })}
      </div>
    </Layout>
  );
};

export default Work;
