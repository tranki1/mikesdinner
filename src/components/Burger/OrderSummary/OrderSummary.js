import React,{Component} from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component{
  //this should be a funtional component instead of a class
  componentWillUpdate(){
    console.log('ORDER SUMMARY component will update');
  }
  render(){
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey=> {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
            </li>
        );
    });
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Countinue to check out?</p>
        <Button btnClass='Danger' clicked={this.props.cancelPurchase}>CANCEL</Button>
        <Button btnClass='Success' clicked={this.props.processOrder} >ORDER</Button>
  
      </Aux>
    );

  }
};


export default OrderSummary;
