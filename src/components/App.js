import React, { Component } from "react";
import BrewerCard from "./BrewerCard";

class App extends Component {
  state = {
    brewers: [
      {
        image: "/images/chemex.png",
        header: "Chemex",
        description:
          "Glass carafe. Enhanced clarity and sweetness. More forgiving.",
        routeName: "recipe/chemex"
      },
      {
        image: "/images/v60.png",
        header: "Hario V60",
        description:
          "Ceramic cone dripper. Versatile and fast. Bright and crisp.",
        routeName: "recipe/v60"
      },
      {
        image: "/images/aeropress.png",
        header: "Aeropress",
        description:
          "Extremely portable with a small footprint. Very fast full immersion brewer. ",
        routeName: "recipe/aeropress"
      },
      {
        image: "/images/frenchpress.png",
        header: "French Press",
        description: "Classic full immersion brewer. Strong and clean. ",
        routeName: "recipe/frenchpress"
      },
      {
        image: "/images/custom.png",
        header: "Custom",
        description: "Know what you like? Set your own custom timers. ",
        routeName: "recipe/custom"
      },
      {
        image: "/images/new.png",
        header: "New Recipe",
        description: "Save a new recipe.",
        routeName: "new"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <BrewerCard brewers={this.state.brewers} />
      </div>
    );
  }
}

export default App;
