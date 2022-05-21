import React from "react";
import styles from "../styles/darkTheme";

const Header = (props: any) => {
  return (
    <div
      className="header-container"
      style={props.darkMode ? { ...styles.container } : {}}
    >
     
      <h1
        className="header-title"
        style={props.darkMode ? { ...styles.titleDarkMode } : {}}
      >
        TENZIES
      </h1>
      <p className="header-description">
        Roll until <strong>all dice</strong> are the <strong>same</strong>.
        Click each die to freeze it at its current value between rolls.
      </p>
    </div>
  );
};
export default Header;
