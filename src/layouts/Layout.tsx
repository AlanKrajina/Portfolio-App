import React, { useContext } from "react";
import { styles } from "./layoutStyles";
import { MediaQueryContext } from "../App";
import LayoutHeader from "./LayoutHeader";

interface LayoutProps {
  children: any;
  headerStyle:
    | {
        fontSize: string;
        color: string;
        marginBottom: string;
        fontWeight: string;
      }
    | undefined;
  headerId: string;
  headerTitle: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  headerStyle,
  headerId,
  headerTitle,
}) => {
  const { isDesktop } = useContext(MediaQueryContext);

  return (
    <div
      style={
        isDesktop
          ? styles.Layout
          : { ...styles.Layout, marginLeft: 0, marginTop: "5rem" }
      }
    >
      <LayoutHeader
        headerStyle={headerStyle}
        isDesktop={isDesktop}
        headerId={headerId}
        headerTitle={headerTitle}
      />
      {children}
    </div>
  );
};

export default Layout;
