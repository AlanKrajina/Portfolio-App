import { Routes, Route } from "react-router-dom";
import About from "../components/Pages/AboutPage/About";
import Home from "../components/HomePage/Home";
import ReduxGame from "../components/Pages/ReduxGamePage/ReduxGame";
import Skills from "../components/Pages/SkillsPage/Skills";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/game" element={<ReduxGame />} />
    </Routes>
  );
};

export default AppRoutes;
