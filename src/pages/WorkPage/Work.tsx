import React from "react";
import Layout from "../../layouts/Layout";
import { styles } from "./workStyles";
import { initialImages } from "../../data/appData";
import WorkApp from "./Apps/WorkApp";

const Work: React.FC = () => {
  return (
    <Layout
      headerStyle={styles.Title}
      headerId="workTitle"
      headerTitle="Work and School Apps"
    >
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
