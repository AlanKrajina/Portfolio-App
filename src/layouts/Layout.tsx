import { styles } from "./layoutStyles";
import useMediaQuery from "../hooks/use-mediaQuery";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div
      style={
        isDesktop
          ? styles.Layout
          : { ...styles.Layout, marginLeft: 0, marginTop: "5rem" }
      }
    >
      {children}
    </div>
  );
};

export default Layout;
