const Section = {
  margin: "0 auto",
  position: "relative" as "relative",
  padding: "0 20px 0 20px",
  flex: 2,
  flexBasis: "20rem",
  display: "flex",
  flexDirection: "column" as "column",
  gap: "0.5rem",
};

const Row = {
  width: "50%",
  minHeight: "1px",
  float: "left" as "left",
  position: "relative" as "relative",
  display: "inline-block",
};

const UnorderedList = {
  margin: "0 20px 0 0",
  padding: 0,
};

const ListItem = {
  listStyle: "none !important",
};

const Title = {
  display: "block",
  marginBottom: "15px",
  fontSize: "1rem",
};

const MobileTitle = {
  display: "block",
  marginBottom: "15px",
  fontSize: "0.8rem",
};

const BarDiv = {
  marginBottom: "25px",
  borderRadius: "3px 3px 3px 3px",
  backgroundColor: "#09131b",
  height: "25px",
  overflow: "hidden",
};

const BarSpan = {
  height: "25px",
  display: "block",
  borderRadius: "3px 3px 3px 3px",
};

const List = {
  padding: "1rem",
};

const RecomAndInterviewDiv = {
  justifyContent: "space-between",
  display: "flex" as "flex",
  gap: "1.5rem",
  flexWrap: "wrap" as "wrap",
};

const RecommendationDiv = {
  display: "flex",
  flexDirection: "column" as "column",
  flex: 1,
  padding: "1.5rem",
  backgroundColor: "rgb(37 36 36)",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  height: "fit-content",
  flexBasis: "21rem",
};

const RITitle = {
  fontSize: "1.5rem",
  color: "#08fdd8",
};

const MobileRITitle = {
  fontSize: "1.2rem",
  color: "#08fdd8",
};

const RIText = {
  fontSize: "1rem",
  color: "#c9c8c8",
};

const MobileRIText = {
  fontSize: "0.7rem",
  color: "#c9c8c8",
};

const RILink = {
  fontSize: "0.8rem",
  color: "#0077b5",
  textDecoration: "underline",
  padding: "0.6rem",
};

const MobileRILink = {
  fontSize: "0.6rem",
  color: "#0077b5",
  textDecoration: "underline",
  padding: "0.6rem",
};

const InterviewDiv = {
  display: "flex",
  flexDirection: "column" as "column",
  flex: 1,
  padding: "1.5rem",
  backgroundColor: "rgb(37 36 36)",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  height: "fit-content",
  flexBasis: "21rem",
};

export const styles = {
  Section: Section,
  Row: Row,
  UnorderedList: UnorderedList,
  ListItem: ListItem,
  Title: Title,
  BarDiv: BarDiv,
  BarSpan: BarSpan,
  List: List,
  RecomAndInterviewDiv: RecomAndInterviewDiv,
  RecommendationDiv: RecommendationDiv,
  InterviewDiv: InterviewDiv,
  RITitle: RITitle,
  RIText: RIText,
  RILink: RILink,
  MobileRITitle: MobileRITitle,
  MobileRIText: MobileRIText,
  MobileRILink: MobileRILink,
  MobileTitle: MobileTitle,
};
