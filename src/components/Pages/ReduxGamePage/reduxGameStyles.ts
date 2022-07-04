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

const ChartsDiv = {
  display: "flex",
  gap: "6rem",
  justifyContent: "center",
  margin: "auto",
};

const Section = {
  padding: "5rem",
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
  ChartsDiv: ChartsDiv,
  MatchedListImage: MatchedListImage,
  Title: Title,
  Section: Section,
  StatisticsDiv: StatisticsDiv,
  GameChartDiv: GameChartDiv,
};
