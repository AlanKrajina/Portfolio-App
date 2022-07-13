import hubFront from "../pages/HomePage/Portfolio/images/hubFront.png";
import hubFront2 from "../pages/HomePage/Portfolio/images/hubFront2.png";
import guessANumberFront from "../pages/HomePage/Portfolio/images/guessANumberFront.png";
import learnfullstackFront from "../pages/HomePage/Portfolio/images/learnfullstackFront.png";
import pizzaOnRailsFront from "../pages/HomePage/Portfolio/images/pizzaOnRailsFront.png";
import sosellBrowserFront from "../pages/HomePage/Portfolio/images/sosellBrowserFront.png";
import sosellMobileFront from "../pages/HomePage/Portfolio/images/sosellMobileFront.png";
import visualCVFront from "../pages/HomePage/Portfolio/images/visualCVFront.png";

// INTERFACES
export interface Options {
  particleColor: string;
  background: string;
  interactive: boolean;
  speed: string;
  density: string;
}
export interface Intro {
  elementId: string;
  title: string[];
}

export interface InitialImagesState {
  youTubeSource: string;
  gitHubSource: string;
  image: string;
  name: string;
}

// DATA
export const introOptions: Options = {
  particleColor: "#08fdd8",
  background: "#1d1d1d",
  interactive: true,
  speed: "medium",
  density: "medium",
};

export const introText: Intro[] = [
  {
    elementId: "firstSection",
    title: ["H", "i", ","],
  },
  {
    elementId: "secondSection",
    title: ["I", `'`, "m", "&nbsp", "A", "l", "a", "n", ","],
  },
  {
    elementId: "thirdSection",
    title: [
      "w",
      "e",
      "l",
      "c",
      "o",
      "m",
      "e",
      "&nbsp",
      "t",
      "o",
      "&nbsp",
      "m",
      "y",
      "&nbsp",
      "P",
      "o",
      "r",
      "t",
      "f",
      "o",
      "l",
      "i",
      "o",
      "&nbsp",
      "A",
      "p",
      "p",
      "&nbsp",
    ],
  },
];

export const initialImages = [
  {
    youTubeSource: "https://youtu.be/41MN6aUOUsM",
    gitHubSource:
      "https://github.com/AlanKrajina/React_Native_Guess-A-Number-App",
    image: guessANumberFront,
    name: "Guess A Number App Mobile",
  },
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
