import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import classes from "./Layout.css";
import Logo from "../UI/Navigation/Logo/Logo";
import NavigationItems from "../UI/Navigation/NavigationItems/NavigationItems";
const layout = props => {
  return (
    <Aux>
      <Toolbar>
        <div>Menu</div>
        <Logo/>
        <NavigationItems></NavigationItems>
      </Toolbar>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
