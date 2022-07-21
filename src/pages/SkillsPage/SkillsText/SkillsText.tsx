import React from "react";
import { styles } from "./skillsTextStyles";

const SkillsText: React.FC = () => {
  return (
    <div style={styles.Section}>
      <p style={styles.Title}>Technical skills:</p>
      <div style={styles.Text}>
        <p>JavaScript - ES10/ES2019</p>
        <p>ReactJS & React Native (hooks), Svelte</p>
        <p>Redux Toolkit, TypeScript, Cypress, Jest</p>
        <p>Apollo, GraphQL, REST</p>
        <p>Material UI, Storybook, Tailwind, CSS in JS</p>
        <p>GitKraken, Docker, JIRA</p>
      </div>

      <p style={styles.Title}>Latest work experience:</p>
      <div style={styles.List}>
        <p style={styles.SubTitle}>Agent3: End-to-end ABM - LONDON, UK</p>
        <p style={styles.SubTitle}>
          Fullstack Developer (March 2020 - June 2022)
        </p>
        <ul style={styles.Text}>
          <li>
            Main responsibility development of all frontend aspects for 10+ apps
            created using React and Svelte
          </li>
          <li>Helping backend creating services using NodeJs and Go</li>
        </ul>

        <p style={styles.SubTitle}>APPLE - CORK, IRELAND</p>
        <p style={styles.SubTitle}>
          OS & MacOS Tech Support (June 2018 – Dec 2018)
        </p>
        <p style={styles.SubTitle}>
          iOS Technical Support (June 2017 – June 2018)
        </p>
        <ul style={styles.Text}>
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

      <p style={styles.Title}>App award:</p>
      <div style={styles.List}>
        <p>SoSell App</p>
        <ul style={styles.Text}>
          <li>
            My first major project having the lead for most of development and
            design on the frontend.
          </li>
          <li>App created by Agent3, sold to Fearleess Labs.</li>
          <li>
            Delighted to see Fearless Labs' SOsell wins gold, based on its
            ability to help field sales reps to better communicate with
            prospective customers and deliver quality leads along the way.
          </li>
          <p style={styles.Link}>
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
          <p style={styles.Link}>
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
