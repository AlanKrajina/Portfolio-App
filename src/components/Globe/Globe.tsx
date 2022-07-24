import React, { useContext } from "react";
import ReactGlobe from "react-globe.gl";
import { MediaQueryContext } from "../../App";

const Globe: React.FC = () => {
  const { isDesktop } = useContext(MediaQueryContext);

  const arcsData = Array.from(Array(20).keys()).map(() => ({
    startLat: 45,
    startLng: 16,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    ],
  }));

  return (
    <ReactGlobe
      backgroundColor="#1d1d1d"
      width={isDesktop ? 850 : 490}
      height={isDesktop ? 820 : 430}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      arcsData={arcsData}
      arcColor={"color"}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 1500}
      showGraticules={true}
    />
  );
};

export default React.memo(Globe);
