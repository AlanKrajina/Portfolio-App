import { useEffect } from "react";
import { ParticleNetwork } from "../helpers/canvas.js";
import { introOptions } from "../data/appData";
import { showIntro } from "../pages/HomePage/Intro/introHelpers";

const useParticleEffect = () => {
  useEffect(() => {
    new ParticleNetwork(
      document.getElementById("particle-canvas"),
      introOptions
    );
    setTimeout(function () {
      showIntro();
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useParticleEffect;
