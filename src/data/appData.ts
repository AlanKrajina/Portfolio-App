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
  summary: string[];
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
    youTubeSource: "https://www.youtube.com/embed/41MN6aUOUsM",
    gitHubSource:
      "https://github.com/AlanKrajina/React_Native_Guess-A-Number-App",
    image: guessANumberFront,
    name: "Guess A Number App Mobile",
    summary: [
      "App uses React Native, Expo, Functional Components, hooks etc.",
      "Focus of this practice app is to differentiate development procedures between React Native and React for browsers.",
      "React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform.",
      "React Native uses native components instead of web components as building blocks such as Text and View components.",
      "In the app Player selects a number between 1-99 and the App tries to quess what number it is while Player gives hints if the number is lower or greater.",
      "Player cannot give a wrong hint, warning modal appears at that point.",
      "When the game ends, Player can see the number of rounds he played and selected number.",
      "For styling app uses Native StyleSheet.create.",
      "App uses AppLoading from expo to prolong screen loading until fonts are fetched.",
    ],
  },
  {
    youTubeSource: "https://www.youtube.com/embed/28mV6BxiXJw",
    gitHubSource: "",
    image: hubFront,
    name: "Hub App",
    summary: [
      "App uses Svelte on frontend and Nodejs on backend, built on Typescript.",
      "App give the user the ability to create custom assets and add them to their custom folders.",
      "Each asset and folder can be filtered and searched, favourited and taged.",
      "After asset is created it can be downloaded as a PDF or as a excel Report.",
      "Asset can have its group with child Assets and can be added to a User group.",
      "Uses Vite plugin that allows to quickly start or reload development server. Vite starts the server right away, and it takes the dependencies that don’t change often and pre-bundles them using ES build.",
      "For automated testing app uses Cypress to provide E2E, unit and integration tests.",
      "For styling app uses a mix of regular CSS and Tailwind with its built-in classes.",
      "For better productivity app uses libraries like DnD drag and drop action, infinite loader and scroll, svelte slider, easy crop etc..",
      "For routing uses Svelte Navigator.",
    ],
  },
  {
    youTubeSource: "https://www.youtube.com/embed/28mV6BxiXJw",
    gitHubSource: "",
    image: hubFront2,
    name: "Hub App Asset Creation",
    summary: [""],
  },
  {
    youTubeSource: "",
    gitHubSource: "",
    image: sosellBrowserFront,
    name: "SoSell Browser App",
    summary: [
      "App gives ability to help sales reps to better communicate with prospective customers and deliver quality leads along the way.",
      "On starting the app the user would select certain accounts of their interest and then their content library would be populated with generated posts.",
      "Content library posts would be created internally.",
      "In content library user could either select these posts or create customised posts that would be shared with clients via email and on social medial like LinkedIn and Twitter, marketing certain products or topics of interest.",
      "Posts could be internal, external or client specific. Custom posts would be added to users Summary posts that could be shared with other users.",
      "App implements statistics with tracked interactions from clients.",
      "On the frontend the app uses React and Typescript, on backend Golang.",
      "For data app uses Apollo GraphQL.",
      "For state management Redux and Jest for testing.",
    ],
  },
  {
    youTubeSource: "",
    gitHubSource: "",
    image: sosellMobileFront,
    name: "SoSell Mobile App",
    summary: [""],
  },
  {
    youTubeSource: "",
    gitHubSource: "https://github.com/AlanKrajina/PizzaOnRailsApp",
    image: pizzaOnRailsFront,
    name: "Pizza On Rails App",
    summary: [
      "In this project I have built a complete Ruby on Rails application that manages related data through complex forms and RESTful routes. The goal of the application is to build a Content Management System.",
      "There is no emphasis on HTML or CSS, and there is no JS required for the project. I added some CSS just to get a basic look for the App.",
      "The app provides a database and web interface for users to:",
      "Sign up, login or log out securely as user.",
      "This app includes a third party signup/login via Google thanks to the OmniAuth gem.",
      "User can see all pizzas but can only create, update, and delete (CRUD) his own created pizza.",
      "User can browse pizzas via name.",
      "User and pizza inputs are validated.",
    ],
  },
  {
    youTubeSource: "",
    gitHubSource:
      "https://github.com/AlanKrajina/VisualCV_Final_Project_frontend",
    image: visualCVFront,
    name: "Visual CV App",
    summary: [
      "VisualCV is a Full Stack web application created using Rails backend and React/Redux frontend.",
      "It is a single page application that utilizes Create, Read and Delete functions of persistent storage.",
      "App uses RESTful architectural style with the implementation of the client and server done independently, meaning that the code on the client side can be changed at any time without affecting the operation of the server, and the code on the server side can be changed without affecting the operation of the client.",
      "Utilizes GET, POST and DELETE fetch requests to get and submit data to the database.",
      "Thunk middleware for async logic that interacts with the store and in addition uses EXTERNAL and INTERNAL APIs.",
      "Project is build upon ES6 JS standards.",
    ],
  },
  {
    youTubeSource: "",
    gitHubSource: "https://github.com/AlanKrajina/learn_fullstack.app",
    image: learnfullstackFront,
    name: "Learn Full Stack App",
    summary: [
      "This project is built using Ruby on Rails and implements RESTful routes. Main requirement is to add dynamic features to previous Rails application that are possible only through JavaScript and a JSON API.",
      "For the first requirement we are to use our previous Rails app and upon that one build dynamic JS features.",
      "The app allows us to:",
      "Sign up, login or log out securely as user.",
      "This app includes a third party signup/login via Google thanks to the OmniAuth gem.",
      "User can see all lessons but can only create, update, and delete (CRUD) his own created lesson and browse lessons via name.",
      "User can view users with most lessons created.  All inputs are validated.",
      "App translates JSON responses into JavaScript Model Objects using constructor syntax and includes two prototype methods.",
      "Renders one index and one show page via JavaScript and an Active Model Serialization JSON Backend.",
      "Dynamically renders on the page at least one serialized 'has_many' relationship through JSON using JavaScript.",
      "Renders a form for creating a resource that is submitted dynamically and displayed through JavaScript and JSON without a page refresh.",
    ],
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
