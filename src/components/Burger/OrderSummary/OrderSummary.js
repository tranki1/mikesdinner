import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=> {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
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
      <Button btnClass='Danger' clicked={props.cancelPurchase}>CANCEL</Button>
      <Button btnClass='Success' clicked={props.processOrder} >ORDER</Button>

    </Aux>
  );
};

export default orderSummary;
