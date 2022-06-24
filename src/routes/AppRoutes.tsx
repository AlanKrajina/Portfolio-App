import { Routes, Route } from "react-router-dom";
import About from "../components/Pages/AboutPage/About";
import Home from "../components/HomePage/Home";
import ReduxGame from "../components/Pages/ReduxGamePage/ReduxGame";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/game" element={<ReduxGame />} />
    </Routes>
  );
};

export default AppRoutes;
