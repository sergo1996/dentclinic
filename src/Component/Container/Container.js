import React from "react";
import AppBar from "../AppBar/AppBar";
import "./Container.css";

const Container = ({ children }) => (
  <div className="container ">
    <AppBar />
    <hr />
    {children}
  </div>
);
export default Container;
