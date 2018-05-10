import React from "react";
import driprLogo from "../../assets/images/logo.png";

import classes from "./Logo.css";

const Logo = props => (
  <div className={classes.Logo}>
    <img src={driprLogo} alt="Dripr Logo" />
  </div>
);

export default Logo;
