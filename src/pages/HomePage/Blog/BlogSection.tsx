import React, { useState, useContext } from "react";
import { styles } from "./blogStyles";
import { blogData, BlogDataState } from "../../../data/appData";
import useScrollTrigger from "../../../hooks/use-scrollTrigger";
import "../../../helpers/animations.css";
import { MediaQueryContext } from "../../../App";

const BlogSection: React.FC = () => {
  const { isDesktop } = useContext(MediaQueryContext);
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
    <div
      style={isDesktop ? styles.Section : { ...styles.Section, marginLeft: 0 }}
    >
      <p
        id="blogTitle"
        style={
          isDesktop
            ? { ...styles.Title }
            : { ...styles.Title, fontSize: "3.2rem", marginBottom: "1rem" }
        }
      />
      <p>
        While studiying at Flatiron School one of the assigments was to create a
        blog when a certain curriculum section would be reached. The blog would
        either explain requirements of the Project created or a point of
        interest regarding development.
      </p>
      <p>
        I implemented both by creating blogs that thoroughly explain how certain
        aspects of development work like React/Redux state flow with Rails API
        using async JS with Promises where one of the main requirements of the
        Flatiron project is the understanding of React/Redux flow. Essentially
        student needs to fully comprehend the difference between using only
        React and React with Redux + Thunk Middleware.
      </p>
      <p>
        A created blog could be about a project like Projects Track App where I
        decided on making an app that allows users to CRUD projects and to keep
        track of them, using Ruby and Sinatra. The purpose of the App would be
        to implement dashboard functionality where a User can save and update
        his Projects or any tasks available.
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
