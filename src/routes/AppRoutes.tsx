import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/Pages/AboutPage/About";
import Skills from "../components/Pages/SkillsPage/Skills";

const Home = lazy(() => import("../components/HomePage/Home"));
const ReduxGame = lazy(
  () => import("../components/Pages/ReduxGamePage/ReduxGame")
);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Home />
          </Suspense>
        }
      />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work" element={<Skills />} />
      <Route
        path="/game"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ReduxGame />
          </Suspense>
        }
      />
      <Route path="/tech" element={<About />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
