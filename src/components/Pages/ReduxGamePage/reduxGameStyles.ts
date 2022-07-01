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

const MatchedListImage = {
  width: "9rem",
  height: "9rem",
  borderRadius: "10px",
};

const DashboardMainDiv = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  color: "#ffffff",
  padding: "2rem 2rem 0 2rem",
  minHeight: "24vh",
  justifyContent: "space-between",
  gap: "1rem",
};

const DashboardButtonsDiv = {
  display: "flex",
  gap: "1rem",
  marginLeft: "22px",
};

const DashboardP = {
  fontSize: "xxx-large",
};

const Timer = {
  fontSize: "x-large",
  padding: "0.5rem",
};

const ChartsDiv = {
  display: "flex",
  gap: "6rem",
  justifyContent: "center",
  margin: "auto",
};

const Section = {
  padding: "5rem",
};

const StatisticsMainDiv = {
  padding: "0 5rem 5rem 5rem",
};

const StatisticsDiv = {
  margin: "auto",
};

const GameChartDiv = {
  display: "flex" as "flex",
  justifyContent: "center",
};

const Title = {
  fontSize: "1.5rem",
  color: "rgb(142 255 238)",
  margin: "3rem",
};

export const styles = {
  ImagesGallery: ImagesGallery,
  Image: Image,
  DashboardMainDiv: DashboardMainDiv,
  DashboardButtonsDiv: DashboardButtonsDiv,
  DashboardP: DashboardP,
  Timer: Timer,
  ChartsDiv: ChartsDiv,
  MatchedListImage: MatchedListImage,
  Title: Title,
  Section: Section,
  StatisticsDiv: StatisticsDiv,
  StatisticsMainDiv: StatisticsMainDiv,
  GameChartDiv: GameChartDiv,
};
