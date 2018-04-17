import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class NewRecipeForm extends Component {
  // createRecipe = e => {
  //   e.preventDefault();
  //   console.log(e);

  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "",
        bloom: 0,
        totalTime: 0,
        description: ""
      }
    };
  }
  handleInputChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  createBrewer = e => {
    e.preventDefault();
    console.log(e);
    const brewer = {
      image: "/images/custom.png",
      header: this.state.data.title,
      description:
        "Glass carafe. Enhanced clarity and sweetness. More forgiving.",
      routeName: `recipe/${this.state.data.title.toLowerCase()}`,
      recipe: this.state.data
    };
    this.props.addBrewer(brewer);
  };
  render() {
    return (
      <Form size="large" onSubmit={this.createBrewer}>
        <Form.Field>
          <label htmlFor="title">Title:</label>
          <Form.Input
            id="title"
            name="title"
            placeholder="Title"
            type="text"
            value={this.state.data.title}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="bloom">Bloom Time</label>
          <Form.Input
            id="bloom"
            name="bloom"
            type="number"
            value={this.state.data.bloom}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="totalTime">Total Time</label>
          <Form.Input
            id="totalTime"
            name="totalTime"
            type="number"
            value={this.state.data.totalTime}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={this.state.data.description}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Button primary fluid size="large">
          Save
        </Button>
      </Form>
    );
  }
}
