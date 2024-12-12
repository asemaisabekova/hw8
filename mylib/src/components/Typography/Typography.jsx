import React from "react";
import "./Typography.css";

const Typography = ({ textSize = "md", children }) => {
  return <p className={`typography ${textSize}`}>{children}</p>;
};

export default Typography;
