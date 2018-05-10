import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import NewRecipeForm from "./NewRecipeForm/NewRecipeForm.js";

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
            <NewRecipeForm addBrewer={this.props.addBrewer} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
