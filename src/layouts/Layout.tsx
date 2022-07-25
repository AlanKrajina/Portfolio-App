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
  const { isHalfScreen } = useContext(MediaQueryContext);

  return (
    <div
      style={
        isHalfScreen
          ? styles.Layout
          : {
              ...styles.Layout,
              marginLeft: 0,
              padding: "8rem 1rem 1rem 1rem",
            }
      }
    >
      <LayoutHeader
        headerStyle={headerStyle}
        isHalfScreen={isHalfScreen}
        headerId={headerId}
        headerTitle={headerTitle}
      />
      {children}
    </div>
  );
};

export default Layout;
