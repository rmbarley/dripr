import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class NewRecipeForm extends Component {
  createRecipe = e => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <Form size="large" onSubmit={this.createRecipe}>
        <Form.Field>
          <label htmlFor="title" className="sr-only">
            Title:
          </label>
          <Form.Input
            id="title"
            name="title"
            placeholder="Recipe Name"
            type="text"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="bloom"> Bloom Time </label>
          <Form.Input id="bloom" name="bloom" type="number" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="totalTime"> Total Time </label>
          <Form.Input id="totalTime" name="totalTime" type="number" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="description"> Description </label>
          <textarea id="description" name="description" />
        </Form.Field>
        <Button primary fluid size="large">
          Save
        </Button>
      </Form>
    );
  }
}
