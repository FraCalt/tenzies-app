import React from "react";
import { BsToggleOff, BsToggleOn, BsFillMoonFill, BsSun } from "react-icons/bs";
import styles from "../styles/darkTheme";

const Header = (props: any) => {
  return (
    <div
      className="header-container"
      style={props.darkMode ? { ...styles.container } : {}}
    >
      <div className="switch-box">
        {props.darkMode ? <BsSun /> : <BsFillMoonFill />}
        {props.darkMode ? (
          <BsToggleOn className="switch-box" onClick={props.toggle} />
        ) : (
          <BsToggleOff className="switch-box" onClick={props.toggle} />
        )}
      </div>
      <h1
        className="header-title"
        style={props.darkMode ? { ...styles.titleDarkMode } : {}}
      >
        TENZIES
      </h1>
      <p className="header-description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </div>
  );
};
export default Header;
