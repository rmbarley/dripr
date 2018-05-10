import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
import logo from '../images/dripr.png';

const Navbar = () => (
  <Menu style={{ background: '#4b3832' }}>
    <Menu.Item
      as="a"
      header
      position="left"
      style={{ color: '#fff4e6', fontSize: '2.8rem' }}
    >
      <Image size="tiny" src={logo} style={{ marginRight: '1.5rem' }} />
      Dripr
    </Menu.Item>
    <Menu.Item
      as={Link}
      to="/"
      position="right"
      style={{ color: '#fff4e6', fontSize: '2.8rem' }}
    >
      Home
    </Menu.Item>
  </Menu>
);

export default Navbar;
