import React,{Component} from "react";
import Aux from "../Aux/Aux";
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';
import classes from "./Layout.css";
import Logo from "../../components/UI/Navigation/Logo/Logo";
import NavigationItems from "../../components/UI/Navigation/NavigationItems/NavigationItems";
import SideDrawer from "../../components/UI/SideDrawer/SideDrawer";
import ToggleMenu from "../../components/UI/Navigation/ToggleMenu/ToggleMenu";
class layout extends Component  {
  state ={
    SideDrawerOpen:false
  }

  SideDrawerOpenHandler=()=>{
    this.setState({SideDrawerOpen:true});
  }
  SideDrawerCloseHandler=()=>{
    this.setState({SideDrawerOpen:false});
  }
  toggleSideDrawerHandler=()=>{
    this.setState((prevState)=>{
    return {SideDrawerOpen:!prevState.SideDrawerOpen};
    })
  }

  render(){
  return (
    <Aux>
      <SideDrawer 
        backdropClicked={this.SideDrawerCloseHandler}
        open={this.state.SideDrawerOpen}/>
      <Toolbar>
        <ToggleMenu toggleMenu={this.toggleSideDrawerHandler}/>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div className={classes.DesktopOnly}>
                <NavigationItems/>
        </div>
      </Toolbar>
      <main className={classes.Content}>{this.props.children}</main>
    </Aux>
  );
};
}

export default layout;
