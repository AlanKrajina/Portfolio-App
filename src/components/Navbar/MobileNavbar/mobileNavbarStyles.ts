const MobileNavbar = {
  display: "flex",
  position: "fixed" as "fixed",
  backgroundColor: "rgb(21, 21, 21)",
  justifyContent: "space-between",
  zIndex: 21,
  top: 0,
  width: "100vw",
};

const Header = {
  height: "3rem",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  alignItems: "center",
  width: "5rem",
  justifyContent: "space-around",
};

const MobileHeader = {
  height: "5rem",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  alignItems: "center",
  width: "8rem",
  justifyContent: "space-around",
};

const TitleDiv = {
  fontSize: "0.8rem",
  zIndex: 2,
  textAlign: "center" as "center",
  padding: "0 5px 0 5px",
};

const MobileTitleDiv = {
  fontSize: "1.1rem",
  zIndex: 2,
  textAlign: "center" as "center",
  padding: "0 5px 0 5px",
};

const Title = {
  fontSize: "x-small",
  color: "#b7b7b7",
};

const MobileTitle = {
  fontSize: "small",
  color: "#b7b7b7",
};

const Logo = {
  width: "1.5rem",
  backgroundColor: "black",
};

const NavItems = {
  display: "flex",
  alignItems: "center",
  zIndex: 21,
  textAlign: "center" as "center",
  fontSize: "0.8rem",
  gap: "0.6rem",
  padding: "0 5px 0 5px",
};

const MobileNavItems = {
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
  marginRight: "0.2rem",
  padding: "0 0.4rem 0 0.4rem",
};

const MobileFooter = {
  alignSelf: "center",
  display: "flex",
  gap: "15px",
  zIndex: 21,
  marginRight: "1rem",
  padding: "0 1rem 0 1rem",
  flexDirection: "column",
  width: "8vw",
};

const FooterIcons = {
  color: "#ffffff",
  fontSize: "small",
};

const MobileFooterIcons = {
  color: "#ffffff",
  fontSize: "large",
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
  MobileHeader: MobileHeader,
  MobileTitleDiv: MobileTitleDiv,
  MobileTitle: MobileTitle,
  MobileFooter: MobileFooter,
  MobileFooterIcons: MobileFooterIcons,
};
