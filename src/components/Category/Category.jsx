import React from "react";
import "./Category.css";
// const Category = ({ icon, title, subtitle }) => {
const Category = ({ fc }) => {
  const { logo, category_name, availability } = fc;
  return (
    <div className="cat-info">
      <img
        src={logo ? logo : "/public/icons/accounts.png"}
        alt="category_name"
      />
      <h2>{category_name}</h2>
      <p>{availability}</p>
    </div>
  );
};

export default Category;
