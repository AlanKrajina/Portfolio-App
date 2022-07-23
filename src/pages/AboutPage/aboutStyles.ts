const Title = {
  fontSize: "4rem",
  color: "#08fdd8",
  marginBottom: "3rem",
  fontWeight: "bold",
  height: "6rem",
};

const MainDiv = {
  display: "flex",
  flexWrap: "wrap" as "wrap",
  gap: "10rem",
  alignSelf: "center",
};

const ParagraphDownloadDiv = {
  flex: 1,
  flexBasis: "30rem",
  maxWidth: "35rem",
  display: "flex",
  gap: "1rem",
  flexDirection: "column" as "column",
};

const PDFDiv = {
  flex: 2,
};

export const styles = {
  Title: Title,
  PDFDiv: PDFDiv,
  MainDiv: MainDiv,
  ParagraphDownloadDiv: ParagraphDownloadDiv,
};
