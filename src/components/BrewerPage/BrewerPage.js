import React from "react";
import Clock from "../Clock/Clock";

const BrewerPage = ({ match, data }) => {
  const recipe = data.find(
    d => `/recipe/${d.title.toLowerCase()}` === match.url
  );
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>Grind Size: {recipe.recipe.grindSize}</p>
      <Clock
        bloomTime={recipe.recipe.bloom}
        brewTime={recipe.recipe.brewTime}
      />
    </div>
  );
};
export default BrewerPage;
