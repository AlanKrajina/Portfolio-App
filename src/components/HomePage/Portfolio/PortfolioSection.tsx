import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { styles } from "./portfolioStyles";
import "./images/Images.css";
import hubFront from "./images/hubFront.png";
import hubFront2 from "./images/hubFront2.png";
import guessANumberFront from "./images/guessANumberFront.png";
import learnfullstackFront from "./images/learnfullstackFront.png";
import pizzaOnRailsFront from "./images/pizzaOnRailsFront.png";
import sosellBrowserFront from "./images/sosellBrowserFront.png";
import sosellMobileFront from "./images/sosellMobileFront.png";
import visualCVFront from "./images/visualCVFront.png";

interface initialImagesState {
  youTubeSource: string;
  gitHubSource: string;
  image: string;
  name: string;
}

const PortfolioSection: React.FC = () => {
  const initialImages = [
    {
      youTubeSource: "https://youtu.be/28mV6BxiXJw",
      gitHubSource: "",
      image: hubFront,
      name: "Hub App Main Page",
    },
    {
      youTubeSource: "https://youtu.be/28mV6BxiXJw",
      gitHubSource: "",
      image: hubFront2,
      name: "Hub App Asset Creation",
    },
    {
      youTubeSource: "",
      gitHubSource: "",
      image: sosellBrowserFront,
      name: "SoSell Browser App",
    },
    {
      youTubeSource: "",
      gitHubSource: "",
      image: sosellMobileFront,
      name: "SoSell Mobile App",
    },
    {
      youTubeSource: "https://youtu.be/41MN6aUOUsM",
      gitHubSource:
        "https://github.com/AlanKrajina/React_Native_Guess-A-Number-App",
      image: guessANumberFront,
      name: "Guess A Number App Mobile",
    },
    {
      youTubeSource: "",
      gitHubSource: "https://github.com/AlanKrajina/PizzaOnRailsApp",
      image: pizzaOnRailsFront,
      name: "Pizza On Rails App",
    },
    {
      youTubeSource: "",
      gitHubSource:
        "https://github.com/AlanKrajina/VisualCV_Final_Project_frontend",
      image: visualCVFront,
      name: "Visual CV App",
    },
    {
      youTubeSource: "",
      gitHubSource: "https://github.com/AlanKrajina/learn_fullstack.app",
      image: learnfullstackFront,
      name: "Learn Full Stack App",
    },
  ];

  const [imagesState, setImagesState] = useState<initialImagesState[]>([]);
  let loadImages: boolean = true;

  const renderImages = useCallback(() => {
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
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#section",
      onEnter: renderImages,
    });
  }, [renderImages]);

  return (
    <div style={styles.Section}>
      <h1 style={styles.Title}>My Portfolio</h1>
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
      <div id="section" style={styles.ImagesGallery}>
        {imagesState.map((elem, key) => {
          return (
            <section
              className="wrapper-full effectTab-header"
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
                          >
                            <i className="fa fa-youtube-square"></i>
                          </a>
                        )}
                        {elem.gitHubSource !== "" && (
                          <a href={elem.gitHubSource} className="social-icon-2">
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
