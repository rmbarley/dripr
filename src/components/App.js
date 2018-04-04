import React, { Component } from "react";
import BrewerCard from "./BrewerCard";
import base from "../base";

class App extends Component {
  state = {
    brewers: [
      {
        image: "/images/chemex.png",
        header: "Chemex",
        description:
          "Glass carafe. Enhanced clarity and sweetness. More forgiving.",
        routeName: "recipe/chemex",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/v60.png",
        header: "Hario V60",
        description:
          "Ceramic cone dripper. Versatile and fast. Bright and crisp.",
        routeName: "recipe/v60",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/aeropress.png",
        header: "Aeropress",
        description:
          "Extremely portable with a small footprint. Very fast full immersion brewer. ",
        routeName: "recipe/aeropress",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/frenchpress.png",
        header: "French Press",
        description: "Classic full immersion brewer. Strong and clean. ",
        routeName: "recipe/frenchpress",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/custom.png",
        header: "Custom",
        description: "Know what you like? Set your own custom timers. ",
        routeName: "recipe/custom",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/new.png",
        header: "New Recipe",
        description: "Save a new recipe.",
        routeName: "new",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      }
    ]
  };
  addRecipe = recipe => {
    const brewers = { ...this.state.brewers, recipe };
    this.setState({ brewers });
  };
  render() {
    return (
      <div className="App">
        <BrewerCard brewers={this.state.brewers} addRecipe={this.addRecipe} />
      </div>
    );
  }
}

export default App;
