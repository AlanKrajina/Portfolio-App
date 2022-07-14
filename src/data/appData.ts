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

export interface BlogDataState {
  link: string;
  title: string;
  technology: string;
  date: string;
  color: string;
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

export const initialImages: InitialImagesState[] = [
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

export const blogData: BlogDataState[] = [
  {
    link: "https://alankrajina.github.io/control_flow_in_javascript",
    title: "Control Flow in JavaScript",
    technology: "JavaScript",
    date: "January 25, 2020",
    color: "#FF0000",
  },
  {
    link: "https://alankrajina.github.io/javascript_scope",
    title: "JavaScript Scope",
    technology: "JavaScript",
    date: "January 19, 2020",
    color: "#4169E1",
  },
  {
    link: "https://alankrajina.github.io/react_redux_state_flow_with_rails_api_using_async_js_with_promises",
    title: "React/Redux state flow with Rails API using async JS with Promises",
    technology: "React, Redux, Ruby on Rails",
    date: "December 14, 2019",
    color: "#8B008B",
  },
  {
    link: "https://alankrajina.github.io/visualcv_final_project",
    title: "VisualCV Final Project",
    technology: "React, Redux, Ruby on Rails",
    date: "November 30, 2019",
    color: "#ADFF2F",
  },
  {
    link: "https://alankrajina.github.io/flow_of_fetch_in_rails_and_js_project_to_view_index_content",
    title: "Flow of fetch in Rails&JS Project to view Index content",
    technology: "JavaScript, Ruby on Rails",
    date: "October 11, 2019",
    color: "#00FFFF",
  },
  {
    link: "https://alankrajina.github.io/pizzaonrailsapp_-_rails_project",
    title: "PizzaOnRailsApp - Rails project",
    technology: "Ruby on Rails",
    date: "September 6, 2019",
    color: "#8B4513",
  },
  {
    link: "https://alankrajina.github.io/projects_track_app",
    title: "Projects Track App",
    technology: "Ruby, Sinatra",
    date: "August 4, 2019",
    color: "#000080",
  },
  {
    link: "https://alankrajina.github.io/cli_data_gem_project_blog",
    title: "CLI Data Gem Project Blog",
    technology: "Ruby",
    date: "June 18, 2019",
    color: "#FFD700",
  },
];
