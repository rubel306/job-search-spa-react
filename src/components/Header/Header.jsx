import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const Header = () => {
  return (
    <div className="header-wrap">
      <div className="container">
        <div className="header">
          <div>
            <img src="/public/job-logo.png" alt="" />
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/aplliedjob">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <div>
            <Button>Start Applying </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
