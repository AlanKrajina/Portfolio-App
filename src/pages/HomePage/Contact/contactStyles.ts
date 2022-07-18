const Section = {
  minHeight: "70vh",
  backgroundColor: "#1d1d1d",
  marginLeft: "9rem",
  padding: "5rem 5rem 1rem 5rem",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column" as "column",
  position: "relative" as "relative",
};

const Title = {
  fontSize: "4rem",
  color: "#08fdd8",
  marginBottom: "3rem",
  fontWeight: "bold",
  height: "6rem",
};

const FormAndGloveDiv = {
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap" as "wrap",
};

const FormDiv = {
  margin: "4rem 0 2rem 0",
  alignSelf: "start",
  flex: 1,
  flexBasis: "30rem",
  maxWidth: "55rem",
};

const GlobeDiv = {
  position: "relative" as "relative",
  bottom: "4rem",
};

const Link = {
  fontSize: "18px",
  color: "#0077b5",
  textDecoration: "underline",
};

export const styles = {
  Section: Section,
  Title: Title,
  FormDiv: FormDiv,
  FormAndGloveDiv: FormAndGloveDiv,
  Link: Link,
  GlobeDiv: GlobeDiv,
};
