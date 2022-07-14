import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./blogStyles";
import { blogData, BlogDataState } from "../../../data/appData";
import useScrollTrigger from "../../../hooks/use-scrollTrigger";
import "../../../helpers/animations.css";

const BlogSection: React.FC = () => {
  const [blogState, setBlogsState] = useState<BlogDataState[]>([]);
  let loadBlogs: boolean = true;

  const delayBlogsLoad = () => {
    if (loadBlogs) {
      let delay = 200;
      blogData.forEach((e) => {
        setTimeout(function () {
          setBlogsState((arr) => [...arr, e]);
        }, delay);
        delay += 200;
      });
    }
    loadBlogs = false;
  };

  useScrollTrigger("blogTitle", "School Blogs", "#blogSection", delayBlogsLoad);

  return (
    <div style={styles.Section}>
      <p id="blogTitle" style={styles.Title} />
      <p>
        A small gallery of recent projects. Some of them were done while working
        for Agent3 and others when I was enrolled in Flatiron School.
      </p>
      <p>
        Visit my <Link to="/about">work page</Link> to see a more in-depth view.
      </p>
      <div id="blogSection" style={styles.BlogGallery}>
        {blogState.map((elem, key) => {
          return (
            <section
              className="animated fadeInLeft50"
              key={key}
              style={{ ...styles.Blog, borderTop: `3px solid ${elem.color}` }}
            >
              <p style={{ ...styles.BlogTechnology, color: elem.color }}>
                {elem.technology}
              </p>
              <a href={elem.link} target="_blank" rel="noreferrer">
                <p style={styles.BlogTitle}>{elem.title}</p>
              </a>
              <p style={{ ...styles.BlogDate, color: "#cbc8c" }}>{elem.date}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
