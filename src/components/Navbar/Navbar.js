import React from "react";
import Logo from "../Logo/Logo";
import NavItems from "./NavItems/NavItems";

import classes from "./Navbar.css";

const Navbar = () => (
  <header className={classes.Navbar}>
    <Logo />
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default Navbar;
