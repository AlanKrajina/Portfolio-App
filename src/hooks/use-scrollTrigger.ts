import { useEffect, useCallback } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import animateTitle from "../helpers/animateTitle";

const useScrollTrigger = (
  titleId: string,
  titleString: string,
  triggerId: string,
  delayLoad: null | (() => void)
) => {
  const renderSection = useCallback(() => {
    animateTitle(titleId, titleString);
    if (delayLoad) delayLoad();
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: triggerId,
      onEnter: renderSection,
    });
  }, [renderSection]);

  return;
};

export default useScrollTrigger;
