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
  isHalfScreen: boolean;
  headerId: string;
  headerTitle: string;
}

const LayoutHeader: React.FC<LayoutProps> = ({
  headerStyle,
  isHalfScreen,
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
        isHalfScreen
          ? { ...headerStyle }
          : { ...headerStyle, fontSize: "2.5rem" }
      }
    />
  );
};

export default LayoutHeader;
