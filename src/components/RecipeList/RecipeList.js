import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Aux from "../../hoc/Aux/Aux";
import Recipe from "./Recipe/Recipe";
import classes from "./RecipeList.css";

class RecipeList extends Component {
  handleRecipeClick = routeName => {
    if (routeName === "New Recipe") {
      this.props.history.push("/new");
    } else {
      this.props.history.push(
        this.props.match.path + "recipe/" + routeName.toLowerCase()
      );
    }
  };

  render() {
    return (
      <Aux>
        <h2 style={{ textAlign: "center" }}>Recipe List</h2>
        <div className={classes.RecipeList}>
          {this.props.recipes.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
              clicked={() => this.handleRecipeClick(recipe.title)}
            />
          ))}
        </div>
      </Aux>
    );
  }
}

export default withRouter(RecipeList);
