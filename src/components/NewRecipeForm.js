import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class NewRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: props.brewers.header,
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
  render() {
    return (
      <Form size="large" onSubmit={() => {}}>
        <Form.Field>
          <label htmlFor="title">Title:</label>
          <Form.Input
            id="title"
            name="title"
            placeholder={this.state.header}
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="bloom">Bloom Time</label>
          <Form.Input
            id="bloom"
            name="bloom"
            type="number"
            value={this.state.bloom}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="totalTime">Total Time</label>
          <Form.Input
            id="totalTime"
            name="totalTime"
            type="number"
            value={this.state.totalTime}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={this.state.bloom}
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
