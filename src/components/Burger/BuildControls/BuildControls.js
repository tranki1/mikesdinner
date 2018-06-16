import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "salad", type: "salad" },
  { label: "bacon", type: "bacon" },
  { label: "cheese", type: "cheese" },
  { label: "meat", type: "meat" }
];
const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price:  <strong>{props.currentPrice.toFixed(2)}</strong></p>
    {controls.map(c => (
      <BuildControl
        label={c.label}
        key={c.label}
        added={() => {props.ingredientAdded(c.type);}}
        removed={() => {props.ingredientRemoved(c.type);}}
        disabled={props.disableInfo[c.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>ORDER NOW</button>
  </div>
);

export default buildControls;
