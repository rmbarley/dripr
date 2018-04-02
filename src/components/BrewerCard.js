import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const BrewerCard = props => (
  <div>
    <Card.Group
      textAlign="center"
      itemsPerRow={3}
      style={{ margin: "0 1.6rem" }}
    >
      {props.brewers.map((brewer, index) => (
        <Card
          as={Link}
          to={`${brewer.routeName}`}
          key={index}
          image={brewer.image}
          header={brewer.header}
          description={brewer.description}
        />
      ))}
    </Card.Group>
  </div>
);

export default BrewerCard;
