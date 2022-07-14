const Section = {
  minHeight: "80vh",
  backgroundColor: "#1d1d1d",
  marginLeft: "9rem",
  padding: "5rem",
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
  justifyContent: "space-between",
  flexWrap: "wrap" as "wrap",
  width: "90%",
};

const FormDiv = {
  margin: "2rem 0rem 2rem 0rem",
  width: "42%",
  minWidth: "34rem",
};

export const styles = {
  Section: Section,
  Title: Title,
  FormDiv: FormDiv,
  FormAndGloveDiv: FormAndGloveDiv,
};
