/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

const useAnimatedLogo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#logo",
          scrub: 0.2,
          start: "top bottom",
          end: "+=10000",
        },
      })
      .to("#logo", {
        rotation: 360 * 5,
        duration: 1,
        ease: "none",
      });
  }, []);
};

export default useAnimatedLogo;
