import React from "react";
import NavItem from "./NavItem/NavItem";

import classes from "./NavItems.css";

const NavItems = props => (
  <ul className={classes.NavItems}>
    <NavItem link="/">Home</NavItem>
    <NavItem link="/browse">Browse</NavItem>
    <NavItem link="/login">Login</NavItem>
  </ul>
);

export default NavItems;
