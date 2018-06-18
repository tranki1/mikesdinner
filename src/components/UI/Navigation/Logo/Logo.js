import React from "react";
import classes from "./Logo.css";
import burgerLogo from "../../../../asset/logo/burger-logo.png";

const logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Mikes Dinner" />
  </div>
);

export default logo;
