import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Navbar from "../../components/Navbar/Navbar";

import classes from "./Layout.css";
class Layout extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Navbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
