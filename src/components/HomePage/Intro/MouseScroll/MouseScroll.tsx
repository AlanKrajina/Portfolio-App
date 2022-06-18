import "./MouseScroll.css";

const MouseScroll: React.FC = () => {
  return (
    <div className="mouse_scroll">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows unu"></span>
        <span className="m_scroll_arrows doi"></span>
        <span className="m_scroll_arrows trei"></span>
      </div>
    </div>
  );
};

export default MouseScroll;
