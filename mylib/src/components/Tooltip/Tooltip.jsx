import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, position = "top", children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="tooltip-container" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && <div className={`tooltip ${position}`}>{text}</div>}
    </div>
  );
};

export default Tooltip;
