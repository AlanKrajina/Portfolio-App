const MobileNavbar = {
  display: "flex",
  position: "fixed" as "fixed",
  backgroundColor: "rgb(21, 21, 21)",
  justifyContent: "space-between",
  zIndex: 21,
  top: 0,
  width: "100vw",
};

const MobileNavItems = {
  display: "flex",
  alignItems: "center",
  zIndex: 21,
  textAlign: "center" as "center",
  fontSize: "1.1rem",
};

const Header = {
  height: "5rem",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  alignItems: "center",
  width: "10rem",
  justifyContent: "space-around",
};

const TitleDiv = {
  fontSize: "1.1rem",
  zIndex: 2,
  textAlign: "center" as "center",
};

const Title = {
  fontSize: "small",
  color: "#b7b7b7",
};

const Logo = {
  width: "2rem",
  backgroundColor: "black",
};

const NavItems = {
  display: "flex",
  alignItems: "center",
  zIndex: 21,
  textAlign: "center" as "center",
  fontSize: "1.1rem",
  gap: "1rem",
  padding: "0 5px 0 5px",
};

const Footer = {
  alignSelf: "center",
  display: "flex",
  gap: "15px",
  zIndex: 21,
  marginRight: "1rem",
  padding: "0 1rem 0 1rem",
};

const FooterIcons = {
  color: "#ffffff",
  fontSize: "larger",
};

export const styles = {
  Header: Header,
  TitleDiv: TitleDiv,
  Title: Title,
  Logo: Logo,
  NavItems: NavItems,
  Footer: Footer,
  FooterIcons: FooterIcons,
  MobileNavbar: MobileNavbar,
  MobileNavItems: MobileNavItems,
};
