import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import App from "./components/App";
import NotFoundPage from "./components/NotFoundPage";
import BrewerPage from "./components/BrewerPage";
import NewRecipePage from "./components/NewRecipePage";

const Router = props => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route
          path="/recipe/:name"
          render={routeProps => (
            <BrewerPage routeProps={routeProps} {...props} />
          )}
        />
        <Route path="/new" component={NewRecipePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
