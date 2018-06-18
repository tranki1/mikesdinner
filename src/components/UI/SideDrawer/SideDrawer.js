import React, { Component } from "react";

import Logo from "../Navigation/Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import classes from "./SideDrawer.css";


const SideDrawer =(props)=>{ 
    let attachClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {attachClasses = [classes.SideDrawer, classes.Open]};
        return (
        <Aux>
            <Backdrop show={props.open} clicked={props.backdropClicked} />
            <div className={attachClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <NavigationItems />
            </div>
        </Aux>
        );
  
}

export default SideDrawer;
