const Navbar = {
  display: "flex",
  flexDirection: "column" as "column",
  height: "100vh",
  position: "fixed" as "fixed",
  backgroundColor: "#151515",
  left: 0,
  width: "9rem",
  justifyContent: "space-between",
  zIndex: 21,
};

const Header = {
  height: "13rem",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  paddingTop: "1rem",
};

const TitleDiv = {
  fontSize: "x-large",
  zIndex: 2,
  marginTop: "0.8rem",
  textAlign: "center" as "center",
};

const Title = {
  fontSize: "small",
};

const Logo = {
  width: "6rem",
  backgroundColor: "black",
};

const Nav = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  zIndex: 21,
  textAlign: "center" as "center",
};

const Footer = {
  height: "17vh",
  alignSelf: "center",
  display: "flex",
  gap: "10px",
  zIndex: 21,
};

const FooterIcons = {
  width: "25px",
  height: "25px",
  backgroundColor: "white",
};

const Hr = {
  backgroundColor: "#383838",
  border: "0.1px solid #383838",
  width: "8rem",
};

export const styles = {
  Navbar: Navbar,
  Header: Header,
  TitleDiv: TitleDiv,
  Title: Title,
  Logo: Logo,
  Nav: Nav,
  Footer: Footer,
  FooterIcons: FooterIcons,
  Hr: Hr,
};
