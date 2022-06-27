const ImagesGallery = {
  width: "100%",
  display: "grid",
  gap: "0.5rem",
  gridTemplateColumns: "repeat(6, 12rem)",
  marginTop: "3rem",
  justifyContent: "center",
};

const Image = {
  width: "12rem",
  height: "12rem",
};

const DashboardMainDiv = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  color: "#ffffff",
  minHeight: "18vh",
};

const DashboardButtonsDiv = {
  display: "flex",
  gap: "10px",
};

export const styles = {
  ImagesGallery: ImagesGallery,
  Image: Image,
  DashboardMainDiv: DashboardMainDiv,
  DashboardButtonsDiv: DashboardButtonsDiv,
};
