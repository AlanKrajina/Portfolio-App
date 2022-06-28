const ImagesGallery = {
  width: "60%",
  display: "grid",
  gap: "0.5rem",
  gridTemplateColumns: "repeat(auto-fit, 12rem)",
  justifyContent: "center",
  margin: "auto",
};

const Image = {
  width: "12rem",
  height: "12rem",
  borderRadius: "10px",
};

const DashboardMainDiv = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  color: "#ffffff",
  padding: "2rem",
  minHeight: "18vh",
  justifyContent: "space-between",
  gap: "1rem",
};

const DashboardButtonsDiv = {
  display: "flex",
  gap: "10px",
};

const DashboardP = {
  fontSize: "xxx-large",
};

const Timer = {
  fontSize: "x-large",
  padding: "0.5rem",
};

export const styles = {
  ImagesGallery: ImagesGallery,
  Image: Image,
  DashboardMainDiv: DashboardMainDiv,
  DashboardButtonsDiv: DashboardButtonsDiv,
  DashboardP: DashboardP,
  Timer: Timer,
};
