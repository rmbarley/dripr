import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import NewRecipeForm from "./NewRecipeForm.js";
import PropTypes from "prop-types";

export default class NewRecipePage extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      recipe: null
    };
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <Segment stacked>
            <h2>Create a new recipe</h2>
            <NewRecipeForm brewers={this.props} recipe={this.state.recipe} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}