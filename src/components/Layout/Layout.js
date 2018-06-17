import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import classes from "./Layout.css";
const layout = props => {
  return (
    <Aux>
      <Toolbar>
        <div>Menu</div>
        <div>Logo</div>
        <div>Nav</div>
      </Toolbar>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
