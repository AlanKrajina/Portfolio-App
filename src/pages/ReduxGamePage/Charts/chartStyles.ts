const Container = {
  width: "100%",
  height: "400px",
};

const Title = {
  fontSize: "1.5rem",
  color: "rgb(142 255 238)",
  margin: "3rem",
};

const MainChartsDiv = {
  margin: "auto",
};

const ChartsDiv = {
  display: "flex",
  gap: "6rem",
  justifyContent: "center",
  margin: "auto",
};

const MatchedListImage = {
  width: "9rem",
  height: "9rem",
  borderRadius: "10px",
};

const MatchedListGallery = {
  width: "60%",
  display: "grid",
  gap: "0.5rem",
  gridTemplateColumns: "repeat(auto-fit, 12rem)",
  justifyContent: "center",
  margin: "auto",
};

const GameChartDiv = {
  display: "flex" as "flex",
  justifyContent: "center",
};

export const styles = {
  Container: Container,
  ChartsDiv: ChartsDiv,
  Title: Title,
  MatchedListImage: MatchedListImage,
  MatchedListGallery: MatchedListGallery,
  GameChartDiv: GameChartDiv,
  MainChartsDiv: MainChartsDiv,
};