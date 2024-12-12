import React from "react";
import "./Button.css";

const Button = ({ type = "button", onClick, disabled, size = "md", variant = "primary", children }) => {
  const className = `button ${size} ${variant} ${disabled ? "disabled" : ""}`;
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
