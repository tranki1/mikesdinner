import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

//Global price for each ingredient
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    state ={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        },
        totalPrice:4

    }
    addIngredientHandler=(type)=>{
        const oddCount=this.state.ingredients[type];
        const updatedCounted= oddCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCounted;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
    }
    removeIngredientHandler=(type)=>{
        const oddCount=this.state.ingredients[type];
        let updatedCounted=0;
        if(oddCount!==0) { updatedCounted=oddCount-1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=updatedCounted;
        const priceSubstraction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceSubstraction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
    }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;