import React from "react";
import { Container, Header } from "semantic-ui-react";
import Clock from "./Clock";

const BrewerPage = ({ match, data }) => {
  const brewer = data.find(d => `/${d.routeName}` === match.url);
  return (
    <Container textAlign="center">
      <Header as="h2" size={"huge"}>
        {brewer.header}
      </Header>
      <p>{brewer.description}</p>
      <p>Grind Size: {brewer.recipe.grindSize}</p>
      <Clock
        bloomTime={brewer.recipe.bloom}
        brewTime={brewer.recipe.brewTime}
      />
    </Container>
  );
};
export default BrewerPage;
