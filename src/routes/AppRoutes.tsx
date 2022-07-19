import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/AboutPage/About";
import Skills from "../pages/SkillsPage/Skills";
import Tech from "../pages/TechPage/Tech";

const Home = lazy(() => import("../pages/HomePage/Home"));
const ReduxGame = lazy(() => import("../pages/ReduxGamePage/ReduxGame"));
const Work = lazy(() => import("../pages/WorkPage/Work"));

const AppRoutes: React.FC = () => {
  const suspenseStyle = {
    backgroundColor: "rgb(29, 29, 29)",
    width: "100vw",
    height: "100vh",
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div style={suspenseStyle} />}>
            <Home />
          </Suspense>
        }
      />
      <Route path="/skills" element={<Skills />} />

      <Route
        path="/work"
        element={
          <Suspense fallback={<div style={suspenseStyle} />}>
            <Work />
          </Suspense>
        }
      />
      <Route
        path="/game"
        element={
          <Suspense fallback={<div style={suspenseStyle} />}>
            <ReduxGame />
          </Suspense>
        }
      />
      <Route path="/tech" element={<Tech />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
