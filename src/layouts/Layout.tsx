import React, { useContext } from "react";
import { styles } from "./layoutStyles";
import { MediaQueryContext } from "../App";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isDesktop = useContext(MediaQueryContext);

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
