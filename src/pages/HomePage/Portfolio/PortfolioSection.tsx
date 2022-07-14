import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./portfolioStyles";
import "../../../helpers/portfolioImages.css";
import "../../../helpers/animations.css";
import { initialImages, InitialImagesState } from "../../../data/appData";
import useScrollTrigger from "../../../hooks/use-scrollTrigger";

const PortfolioSection: React.FC = () => {
  const [imagesState, setImagesState] = useState<InitialImagesState[]>([]);
  let loadImages: boolean = true;

  const delayImagesLoad = () => {
    if (loadImages) {
      let delay = 200;
      initialImages.forEach((e) => {
        setTimeout(function () {
          setImagesState((arr) => [...arr, e]);
        }, delay);
        delay += 200;
      });
    }
    loadImages = false;
  };

  useScrollTrigger(
    "portfolioTitle",
    "My Portfolio",
    "#portfolioSection",
    delayImagesLoad
  );

  return (
    <div style={styles.Section}>
      <p id="portfolioTitle" style={styles.Title} />
      <p>
        A small gallery of recent projects. Some of them were done while working
        for Agent3 and others when I was enrolled in Flatiron School.
      </p>
      <p>
        It's only a drop in the ocean compared to the entire list. In total I
        worked on approx 20 projects where my main responsibility was
        development of all frontend functionality.
      </p>
      <p>
        Visit my <Link to="/about">work page</Link> to see a more in-depth view.
      </p>
      <div id="portfolioSection" style={styles.ImagesGallery}>
        {imagesState.map((elem, key) => {
          return (
            <section
              className="wrapper-full effectTab-header animated fadeInLeft50"
              id="style_11"
              key={key}
            >
              <div className="column-12 column-xs-12 tab">
                <div className="column-4 column-xs-12 column-sm-6 column-md-6 box-tab">
                  <div className="effect effect-portfolio">
                    <img
                      src={elem.image}
                      className="photoEffect"
                      alt="portfolioImage"
                    />
                    <div className="tab-text">
                      <p>{elem.name}</p>
                      <div className="icons-block">
                        {elem.youTubeSource !== "" && (
                          <a
                            href={elem.youTubeSource}
                            className="social-icon-1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-youtube-square"></i>
                          </a>
                        )}
                        {elem.gitHubSource !== "" && (
                          <a
                            href={elem.gitHubSource}
                            className="social-icon-2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-github"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioSection;
