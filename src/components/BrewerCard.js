import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const brewers = [
  {
    image: '/images/chemex.png',
    header: 'Chemex',
    description: 'Glass carafe. Enhanced clarity and sweetness. More forgiving.'
  },
  {
    image: '/images/v60.png',
    header: 'Hario V60',
    description: 'Ceramic cone dripper. Versatile and fast. Bright and crisp.'
  },
  {
    image: '/images/aeropress.png',
    header: 'Aeropress',
    description:
      'Extremely portable with a small footprint. Very fast full immersion brewer. '
  },
  {
    image: '/images/frenchpress.png',
    header: 'French Press',
    description: 'Classic full immersion brewer. Strong and clean. '
  },
  {
    image: '/images/custom.png',
    header: 'Custom',
    description: 'Know what you like? Set your own custom timers. '
  },
  {
    image: '/images/new.png',
    header: 'New Recipe',
    description: 'Save a new recipe.'
  }
];
const BrewerCard = () => (
  <div>
    <Card.Group
      textAlign="center"
      itemsPerRow={3}
      style={{ margin: '0 1.6rem' }}
    >
      {brewers.map((brewer, index) => (
        <Card
          as={Link}
          to="/chemex"
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
