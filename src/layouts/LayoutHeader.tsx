import React, { useEffect } from "react";
import animateTitle from "../helpers/animateTitle";

interface LayoutProps {
  headerStyle:
    | {
        fontSize: string;
        color: string;
        marginBottom: string;
        fontWeight: string;
      }
    | undefined;
  isDesktop: boolean;
  headerId: string;
  headerTitle: string;
}

const LayoutHeader: React.FC<LayoutProps> = ({
  headerStyle,
  isDesktop,
  headerId,
  headerTitle,
}) => {
  useEffect(() => {
    animateTitle(headerId, headerTitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <p
      id={headerId}
      style={
        isDesktop ? { ...headerStyle } : { ...headerStyle, fontSize: "3rem" }
      }
    />
  );
};

export default LayoutHeader;
