import React, { useContext } from "react";
import { styles } from "./skillsTextStyles";
import { MediaQueryContext } from "../../../App";

const SkillsText: React.FC = () => {
  const { isDesktop } = useContext(MediaQueryContext);

  return (
    <div style={styles.Section}>
      <p style={isDesktop ? styles.Title : styles.MobileTitle}>
        Technical skills:
      </p>
      <div style={isDesktop ? styles.Text : styles.MobileText}>
        <p>JavaScript - ES10/ES2019</p>
        <p>ReactJS & React Native (hooks), Svelte</p>
        <p>Redux Toolkit, TypeScript, Cypress, Jest</p>
        <p>Apollo, GraphQL, REST</p>
        <p>Material UI, Storybook, Tailwind, CSS in JS</p>
        <p>GitKraken, Docker, JIRA</p>
      </div>

      <p style={isDesktop ? styles.Title : styles.MobileTitle}>
        Latest work experience:
      </p>
      <div style={styles.List}>
        <p style={isDesktop ? styles.SubTitle : styles.MobileSubTitle}>
          Agent3: End-to-end ABM - LONDON, UK
        </p>
        <p style={isDesktop ? styles.SubTitle : styles.MobileSubTitle}>
          Fullstack Developer (March 2020 - June 2022)
        </p>
        <ul style={isDesktop ? styles.Text : styles.MobileText}>
          <li>
            Main responsibility was development of all frontend aspects for 10+
            apps created using React and Svelte.
          </li>
          <li>
            With the work on the frontend I helped backend devs with creating
            services using NodeJs and Go.
          </li>
        </ul>

        <p style={isDesktop ? styles.SubTitle : styles.MobileSubTitle}>
          APPLE - CORK, IRELAND
        </p>
        <p style={isDesktop ? styles.SubTitle : styles.MobileSubTitle}>
          OS & MacOS Tech Support (June 2018 – Dec 2018)
        </p>
        <p style={isDesktop ? styles.SubTitle : styles.MobileSubTitle}>
          iOS Technical Support (June 2017 – June 2018)
        </p>
        <ul style={isDesktop ? styles.Text : styles.MobileText}>
          <li>
            Resolving end user technical issues that requires advanced knowledge
            of Mac or iOS systems.
          </li>
          <li>
            Continuously accomplishing above 90% target req (given promotion to
            MacOS).
          </li>
        </ul>
      </div>

      <p style={isDesktop ? styles.Title : styles.MobileTitle}>App award:</p>
      <div style={styles.List}>
        <p>SoSell App</p>
        <ul style={isDesktop ? styles.Text : styles.MobileText}>
          <li>
            My first major project having the lead for most of development and
            design on the frontend.
          </li>
          <li>App created by Agent3, sold to Fearleess Labs.</li>
          <li>
            The app won a gold medal based on its ability to help field sales
            reps to better communicate with prospective customers and deliver
            quality leads along the way.
          </li>
          <p style={isDesktop ? styles.Link : styles.MobileLink}>
            <a
              href={
                "https://www.linkedin.com/posts/agent3_digital-impact-awards-2020-winners-announced-activity-6773306808900562945-3Ynb?utm_source=linkedin_share&utm_medium=member_desktop_web"
              }
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn post link
            </a>
          </p>
          <p style={isDesktop ? styles.Link : styles.MobileLink}>
            <a
              href={
                "https://www.communicatemagazine.com/news/2021/digital-impact-awards-2020-winners-announced/"
              }
              target="_blank"
              rel="noreferrer"
            >
              Communicate magazine link
            </a>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default SkillsText;
