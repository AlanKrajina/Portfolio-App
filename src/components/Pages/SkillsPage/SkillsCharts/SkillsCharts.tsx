import React from "react";
import "./skillsChartsStyles.css";

const SkillsCharts: React.FC = () => {
  return (
    <div className="wrap">
      <article className="row">
        <ul>
          <li className="html">
            <em>HTML/HTML5</em>
            <div>
              <span className="animated fadeInLeft"></span>
            </div>
          </li>
          <li className="css">
            <em>CSS/CSS3</em>
            <div>
              <span className="animated fadeInLeft"></span>
            </div>
          </li>
          <li className="php">
            <em>JavaScript</em>
            <div>
              <span className="animated fadeInLeft"></span>
            </div>
          </li>
          <li className="mysql">
            <em>React</em>
            <div>
              <span className="animated fadeInLeft"></span>
            </div>
          </li>
        </ul>
      </article>
      <article className="row">
        <ul>
          <li className="jquery">
            <em>Redux</em>
            <div>
              <span className="animated fadeInLeft"></span>
            </div>
          </li>
          <li className="javascript">
            <em>TypeScript</em>
            <div>
              <span className="animated fadeInLeft"></span>
            </div>
          </li>
          <li className="seo">
            <em>Jest</em>
            <div>
              <span className="animated fadeInLeft"></span>
            </div>
          </li>
          <li className="unix">
            <em>React Native</em>
            <div>
              <span className="animated fadeInLeft"></span>
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default SkillsCharts;
