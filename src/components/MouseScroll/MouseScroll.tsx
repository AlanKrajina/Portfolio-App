import React, { useContext } from "react";
import "./MouseScroll.css";
import { MediaQueryContext } from "../../App";

const MouseScroll: React.FC = () => {
  const { isDesktop } = useContext(MediaQueryContext);

  return (
    <div
      className="mouse_scroll"
      style={isDesktop ? undefined : { marginTop: "30vh" }}
    >
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows one"></span>
        <span className="m_scroll_arrows two"></span>
        <span className="m_scroll_arrows three"></span>
      </div>
    </div>
  );
};

export default MouseScroll;
