import React from 'react';
import { Card } from 'semantic-ui-react';
import { logo } from '../images/dripr.png';
const items = [
  {
    header: 'Chemex',
    image: { logo },
    description: 'Glass carafe. Enhanced clarity and sweetness. More forgiving.'
  },
  {
    header: 'Hario V60',
    description: 'Ceramic cone dripper. Versatile and fast. Bright and crisp.'
  },
  {
    header: 'Aeropress',
    description:
      'Extremely portable with a small footprint. Very fast full immersion brewer. '
  },
  {
    header: 'French Press',
    description: 'Classic full immersion brewer. Strong and clean. '
  },
  {
    header: 'Custom',
    description: 'Know what you like? Set your own custom timers. '
  },
  {
    header: 'New Recipe',
    description: 'Save a new recipe.'
  }
];

const CardList = () => <Card.Group items={items} />;

export default CardList;
