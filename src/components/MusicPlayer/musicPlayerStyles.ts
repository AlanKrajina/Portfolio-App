const MusicPlayerDiv = {
  position: "fixed" as "fixed",
  top: 0,
  right: 0,
  zIndex: 22,
  display: "flex",
  flexDirection: "column" as "column",
  margin: "1rem",
  alignItems: "flex-end",
  color: "white",
};

const Player = {
  opacity: "0.7",
};

const ToggleButtonDiv = {
  display: "flex",
  fontSize: "1.2rem",
  alignItems: "center",
  width: "9rem",
  justifyContent: "space-between",
  cursor: "pointer",
  marginBottom: "5px",
};

export const styles = {
  MusicPlayerDiv: MusicPlayerDiv,
  Player: Player,
  ToggleButtonDiv: ToggleButtonDiv,
};
