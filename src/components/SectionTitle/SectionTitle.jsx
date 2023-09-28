import React from "react";
import "./SectionTitle.css";
const SectionTitle = ({ children }) => {
  if (Array.isArray(children) && children.length === 2) {
    return (
      <div className="section-title">
        <h2>{children[0]}</h2>
        <p>{children[1]}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Error: Two children values are required on Array. </h2>
      </div>
    );
  }
};

export default SectionTitle;
