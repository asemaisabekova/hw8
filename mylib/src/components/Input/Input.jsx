import React from "react";
import "./Input.css";

const Input = ({ type = "text", placeholder, value, onChange, disabled, label, danger = false }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className={`input ${danger ? "danger" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
