import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classes from "./NewRecipeForm.css";
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
      recipe: {
        title: "",
        grindSize: "",
        bloom: 0,
        totalTime: 0,
        recipeText: ""
      }
    };
  }
  handleInputChange = e => {
    this.setState({
      recipe: {
        ...this.state.recipe,
        [e.target.name]: e.target.value
      }
    });
  };
  createBrewer = e => {
    e.preventDefault();
    console.log(e);
    const brewer = {
      image: "/images/custom.png",
      title: this.state.recipe.title,
      description:
        "Glass carafe. Enhanced clarity and sweetness. More forgiving.",
      routeName: `recipe/${this.state.recipe.title.toLowerCase()}`,
      recipe: this.state.recipe
    };
    this.props.addBrewer(brewer);
    this.props.history.push("/");
  };
  render() {
    return (
      <form onSubmit={this.createBrewer} className={classes.NewRecipeForm}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          placeholder="Title"
          type="text"
          value={this.state.recipe.title}
          onChange={this.handleInputChange}
        />
        <label htmlFor="grindsize">Grind Size</label>
        <select
          placeholder="Grind Size"
          label="Grind Size"
          options={options}
          id="grindSize"
          name="grindSize"
          value={this.state.recipe.grindSize}
          onChange={this.handleInputChange}
        >
          {options.map(option => (
            <option key={option.key} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <label htmlFor="bloom">Bloom Time (seconds)</label>
        <input
          id="bloom"
          name="bloom"
          type="number"
          value={this.state.recipe.bloom}
          onChange={this.handleInputChange}
        />
        <label htmlFor="totalTime">Total Time (seconds)</label>
        <input
          id="totalTime"
          name="totalTime"
          type="number"
          value={this.state.recipe.totalTime}
          onChange={this.handleInputChange}
        />
        <label htmlFor="recipeText">Description</label>
        <textarea
          id="Recipe Text"
          name="recipeText"
          value={this.state.recipe.recipeText}
          onChange={this.handleInputChange}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default withRouter(NewRecipeForm);
