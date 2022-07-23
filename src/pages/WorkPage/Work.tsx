import React, { useEffect, useContext } from "react";
import Layout from "../../layouts/Layout";
import { styles } from "./workStyles";
import animateTitle from "../../helpers/animateTitle";
import { initialImages } from "../../data/appData";
import WorkApp from "./Apps/WorkApp";
import { MediaQueryContext } from "../../App";

const Work: React.FC = () => {
  const isDesktop = useContext(MediaQueryContext);

  useEffect(() => {
    animateTitle("workTitle", "Work and School Apps");
  }, []);

  return (
    <Layout>
      <p
        id="workTitle"
        style={
          isDesktop
            ? { ...styles.Title }
            : { ...styles.Title, fontSize: "3rem" }
        }
      />
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
