const MainDiv = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#1d1d1d",
};

const IntroSection = {
  position: "absolute" as "absolute",
  top: "28vh",
  zIndex: 2,
  color: "white",
  fontSize: "5.5rem",
  fontWeight: "bold",
  left: "50%",
  transform: "translate(-50%, 0)",
};

const ParticleCanvas = {
  width: "100%",
  height: "60vh",
  paddingTop: "20vh",
};

export const styles = {
  IntroSection: IntroSection,
  ParticleCanvas: ParticleCanvas,
  MainDiv: MainDiv,
};
