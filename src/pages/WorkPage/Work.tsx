import React from "react";
import Layout from "../../layouts/Layout";
import { styles } from "./workStyles";
import { initialImages } from "../../data/appData";
import WorkApp from "./WorkApps/WorkApp";
import _ from "lodash";

const Work: React.FC = () => {
  return (
    <Layout
      headerStyle={styles.Title}
      headerId="workTitle"
      headerTitle="Work and School Apps"
    >
      <div style={styles.Section}>
        {initialImages.map((elem, index) => {
          if (index !== 2 && index !== 4) {
            return (
              <div key={_.uniqueId()}>
                <WorkApp workApp={elem} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </Layout>
  );
};

export default Work;
