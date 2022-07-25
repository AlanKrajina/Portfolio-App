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
  width: "3rem",
  justifyContent: "space-around",
  borderRadius: "0 5px 5px 0",
};

const MobileHeader = {
  height: "5rem",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  alignItems: "center",
  width: "5rem",
  justifyContent: "space-around",
  borderRadius: "0 10px 10px 0",
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
  fontSize: "0.9rem",
  gap: "0.6rem",
  padding: "0 5px 0 5px",
};

const MobileNavItems = {
  display: "flex",
  alignItems: "center",
  zIndex: 21,
  textAlign: "center" as "center",
  fontSize: "1.2rem",
  gap: "1rem",
  padding: "0 5px 0 5px",
};

const Footer = {
  alignSelf: "center",
  display: "flex",
  gap: "15px",
  zIndex: 21,
  padding: "0 0.5rem 0 0.5rem",
  backgroundColor: "black",
  height: "3rem",
  alignItems: "center" as "center",
  borderRadius: "5px 0 0 5px",
};

const MobileFooter = {
  alignSelf: "center",
  display: "flex",
  gap: "15px",
  zIndex: 21,
  padding: "0 0.5rem 0 0.5rem",
  width: "5rem",
  backgroundColor: "black",
  height: "5rem",
  alignItems: "center" as "center",
  justifyContent: "center",
  borderRadius: "10px 0 0 10px",
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
