import React, { Component } from "react";
import BrewerCard from "./BrewerCard";
import base from "../base";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrewerCard
          brewers={this.props.brewers}
          addRecipe={this.props.addRecipe}
        />
      </div>
    );
  }
}

export default App;
