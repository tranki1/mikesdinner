import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import classes from "./Layout.css";
import Logo from "../UI/Navigation/Logo/Logo";
const layout = props => {
  return (
    <Aux>
      <Toolbar>
        <div>Menu</div>
        <Logo/>
        <div>Nav</div>
      </Toolbar>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
