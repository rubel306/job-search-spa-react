import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Fotoer from "../Footer/Fotoer";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Fotoer></Fotoer>
    </div>
  );
};

export default Layout;
