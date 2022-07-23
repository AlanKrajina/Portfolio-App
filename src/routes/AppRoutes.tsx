import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/HomePage/Home"));
const Skills = lazy(() => import("../pages/SkillsPage/Skills"));
const Work = lazy(() => import("../pages/WorkPage/Work"));
const ReduxGame = lazy(() => import("../pages/ReduxGamePage/ReduxGame"));
const About = lazy(() => import("../pages/AboutPage/About"));

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
      <Route
        path="/skills"
        element={
          <Suspense fallback={<div style={suspenseStyle} />}>
            <Skills />
          </Suspense>
        }
      />
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
      <Route
        path="/about"
        element={
          <Suspense fallback={<div style={suspenseStyle} />}>
            <About />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
