import React, { Component } from "react";
import NewRecipeForm from "./NewRecipeForm/NewRecipeForm.js";
import classes from "./NewRecipePage.css";

export default class NewRecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null
    };
  }

  render() {
    return (
      <div className={classes.NewRecipePage}>
        <h2>Create a new recipe</h2>
        <NewRecipeForm addBrewer={this.props.addBrewer} />
      </div>
    );
  }
}
