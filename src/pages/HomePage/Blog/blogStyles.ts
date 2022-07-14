const Section = {
  minHeight: "80vh",
  backgroundColor: "#1d1d1d",
  marginLeft: "9rem",
  padding: "5rem",
  color: "#FFFFFF",
  fontSize: "large",
};

const Title = {
  fontSize: "4rem",
  color: "#08fdd8",
  marginBottom: "3rem",
  fontWeight: "bold",
  height: "6rem",
};

const BlogGallery = {
  width: "100%",
  display: "grid",
  gap: "1.5rem",
  gridTemplateColumns: "repeat(auto-fill, 28rem)",
  marginTop: "3rem",
};

const Blog = {
  width: "28rem",
  height: "12rem",
  backgroundColor: "rgb(37 36 36)",
  borderRadius: "0 0 10px 10px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  padding: "1rem",
  justifyContent: "space-between",
  display: "flex" as "flex",
  flexDirection: "column" as "column",
};

const BlogTechnology = {
  textTransform: "uppercase" as "uppercase",
  fontSize: "small",
};

const BlogTitle = {
  fontSize: "x-large",
};

const BlogDate = {
  fontSize: "x-small",
};

export const styles = {
  Section: Section,
  Title: Title,
  BlogGallery: BlogGallery,
  Blog: Blog,
  BlogTechnology: BlogTechnology,
  BlogTitle: BlogTitle,
  BlogDate: BlogDate,
};
