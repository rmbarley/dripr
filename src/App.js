import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import RecipeList from "./components/RecipeList/RecipeList";
import NewRecipePage from "./components/NewRecipePage/NewRecipePage";
import BrewerPage from "./components/BrewerPage/BrewerPage";

class App extends Component {
  state = {
    recipes: [
      {
        image: "/images/chemex.png",
        title: "Chemex",
        description:
          "Glass carafe. Enhanced clarity and sweetness. More forgiving.",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/v60.png",
        title: "Hario V60",
        description:
          "Ceramic cone dripper. Versatile and fast. Bright and crisp.",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/aeropress.png",
        title: "Aeropress",
        description:
          "Extremely portable with a small footprint. Very fast full immersion brewer. ",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/frenchpress.png",
        title: "French Press",
        description: "Classic full immersion brewer. Strong and clean. ",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/custom.png",
        title: "Custom",
        description: "Know what you like? Set your own custom timers. ",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      },
      {
        image: "/images/new.png",
        title: "New Recipe",
        description: "Save a new recipe.",
        recipe: {
          grindSize: "fine",
          bloom: 45,
          brewTime: 360,
          description: "lorem ipsum etc."
        }
      }
    ]
  };
  addBrewer = brewer => {
    const recipes = [...this.state.recipes, brewer];
    this.setState({ recipes });
  };
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route
              path="/new"
              render={() => <NewRecipePage addBrewer={this.addBrewer} />}
            />
            <Route
              path="/recipe/:name"
              render={props => (
                <BrewerPage data={this.state.recipes} {...props} />
              )}
            />
            <Route
              path="/"
              render={props => (
                <RecipeList recipes={this.state.recipes} {...props} />
              )}
              exact
            />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
