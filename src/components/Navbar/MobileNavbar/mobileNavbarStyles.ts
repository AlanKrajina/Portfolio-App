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
  fontSize: "larger",
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
  fontSize: "larger",
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
  fontSize: "larger",
  gap: "1rem",
};

const Footer = {
  alignSelf: "center",
  display: "flex",
  gap: "15px",
  zIndex: 21,
  marginRight: "3rem",
};

const FooterIcons = {
  color: "#ffffff",
  fontSize: "larger",
};

const Hr = {
  backgroundColor: "#383838",
  border: "0.1px solid #383838",
  width: "8rem",
};

export const styles = {
  Header: Header,
  TitleDiv: TitleDiv,
  Title: Title,
  Logo: Logo,
  NavItems: NavItems,
  Footer: Footer,
  FooterIcons: FooterIcons,
  Hr: Hr,
  MobileNavbar: MobileNavbar,
  MobileNavItems: MobileNavItems,
};
