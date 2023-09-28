import React from "react";
import "./JobDetailsHeader.css";

const JobDetailsHeader = ({ children }) => {
  return (
    <div className="job-details-header">
      <div className="container">
        <h2>{children}</h2>
      </div>
    </div>
  );
};

export default JobDetailsHeader;
