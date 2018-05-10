import React, { Component } from "react";
import { Dropdown, Form, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const options = [
  { key: "1", text: "Fine", value: "Fine" },
  { key: "2", text: "Medium-Fine", value: "Medium-Fine" },
  { key: "3", text: "Medium", value: "Medium" },
  { key: "4", text: "Medium-Coarse", value: "Medium-Coarse" },
  { key: "5", text: "Coarse", value: "Coarse" }
];
class NewRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      grindSize: "",
      bloom: 0,
      totalTime: 0,
      recipeText: ""
    };
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };
  createBrewer = e => {
    e.preventDefault();
    console.log(e);
    const brewer = {
      image: "/images/custom.png",
      header: this.state.title,
      description:
        "Glass carafe. Enhanced clarity and sweetness. More forgiving.",
      routeName: `recipe/${this.state.title.toLowerCase()}`,
      recipe: this.state
    };
    this.props.addBrewer(brewer);
    this.props.history.push("/");
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
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <p>current value: {this.state.title}</p>
        </Form.Field>
        <Form.Field>
          <Dropdown
            fluid
            selection
            placeholder="Grind Size"
            label="Grind Size"
            options={options}
            id="grindSize"
            name="grindSize"
            value={this.state.grindSize}
            onChange={this.handleInputChange}
          />
          <p>current value: {this.state.grindSize}</p>
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
          <p>current value: {this.state.totalTime}</p>
        </Form.Field>
        <Form.Field>
          <label htmlFor="recipeText">Description</label>
          <Form.TextArea
            id="Recipe Text"
            name="recipeText"
            value={this.state.recipeText}
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

export default withRouter(NewRecipeForm);
