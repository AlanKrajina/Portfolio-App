import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { styles } from "./portfolioStyles";
import "../../../data/portfolioImages/portfolioImages.css";
import "../../../helpers/animations.css";
import { initialImages, InitialImagesState } from "../../../data/appData";
import useScrollTrigger from "../../../hooks/use-scrollTrigger";
import { MediaQueryContext } from "../../../App";

const PortfolioSection: React.FC = () => {
  const { isDesktop, isHalfScreen } = useContext(MediaQueryContext);
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
    <div
      style={
        isHalfScreen
          ? styles.Section
          : {
              ...styles.Section,
              marginLeft: 0,
              padding: "2rem",
              fontSize: isDesktop ? "0.9rem" : "0.8rem",
            }
      }
    >
      <p
        id="portfolioTitle"
        style={
          isDesktop
            ? { ...styles.Title }
            : { ...styles.Title, fontSize: "2rem", marginBottom: "0.1rem" }
        }
      />
      <p>
        A small gallery of recent work and school projects. Some of them were
        done while working for Agent3 and others when I was enrolled in Flatiron
        School. Unfortunately because of data protection most of the work apps
        could not be shown.
      </p>
      <p>
        It's only a small fraction compared to the entire list. In total I
        worked on approx 20 projects where my main responsibility was
        development of all frontend functionality.
      </p>
      <p>
        Visit my{" "}
        <span style={styles.Link}>
          <Link to="/work">work page</Link>
        </span>{" "}
        to see a more in-depth view.
      </p>
      <div
        id="portfolioSection"
        style={
          isHalfScreen
            ? { ...styles.ImagesGallery }
            : {
                ...styles.ImagesGallery,
                gridTemplateColumns: isDesktop
                  ? "repeat(auto-fill, 19rem)"
                  : "repeat(auto-fill, 9rem)",
                gap: isDesktop ? "1.5rem" : "0.7rem",
              }
        }
      >
        {imagesState.map((elem, key) => {
          return (
            <section
              className="wrapper-full effectTab-header animated fadeInLeft50"
              id="style_11"
              key={key}
            >
              <div className="column-12 column-xs-12 tab">
                <div className="column-4 column-xs-12 column-sm-6 column-md-6 box-tab">
                  <div className={isDesktop ? "effect effect-portfolio" : ""}>
                    <img
                      src={elem.image}
                      className={
                        isDesktop ? "photoEffect" : "mobilePhotoEffect"
                      }
                      alt="portfolioImage"
                    />

                    {isDesktop && (
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
                    )}
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
