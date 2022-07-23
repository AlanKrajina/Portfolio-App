const DesktopNavbar = {
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
  height: "12rem",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  paddingTop: "1rem",
};

const TitleDiv = {
  fontSize: "larger",
  zIndex: 2,
  marginTop: "0.8rem",
  textAlign: "center" as "center",
};

const Title = {
  fontSize: "small",
  color: "#b7b7b7",
};

const Logo = {
  width: "6rem",
  backgroundColor: "black",
};

const NavItems = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  zIndex: 21,
  textAlign: "center" as "center",
  fontSize: "larger",
};

const Footer = {
  height: "10vh",
  alignSelf: "center",
  display: "flex",
  gap: "15px",
  zIndex: 21,
  alignItems: "center",
};

const FooterIcons = {
  color: "#ffffff",
  fontSize: "x-large",
};

const Hr = {
  backgroundColor: "#383838",
  border: "0.1px solid #383838",
  width: "8rem",
};

export const styles = {
  DesktopNavbar: DesktopNavbar,
  Header: Header,
  TitleDiv: TitleDiv,
  Title: Title,
  Logo: Logo,
  NavItems: NavItems,
  Footer: Footer,
  FooterIcons: FooterIcons,
  Hr: Hr,
};
