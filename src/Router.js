import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import App from "./components/App";
import NotFoundPage from "./components/NotFoundPage";
import BrewerPage from "./components/BrewerPage";
import NewRecipePage from "./components/NewRecipePage";

class Router extends Component {
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
  addBrewer = brewer => {
    console.log(brewer);
    const brewers = [...this.state.brewers, brewer];
    this.setState({ brewers });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route
              path="/"
              render={() => <App brewers={this.state.brewers} />}
              exact
            />
            <Route
              path="/recipe/:name"
              render={props => (
                <BrewerPage {...props} data={this.state.brewers} />
              )}
            />
            <Route
              path="/new"
              render={() => <NewRecipePage addBrewer={this.addBrewer} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
