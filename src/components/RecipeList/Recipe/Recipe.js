import React from "react";
import classes from "./Recipe.css";

const Recipe = props => (
  <div className={classes.Recipe} onClick={props.clicked}>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
);

export default Recipe;
