import React from "react";
import { nanoid } from "nanoid";
import "../styles/style.css";
import styles from "../styles/darkTheme";

const UserForm = (props: any) => {

  const handleOnChange = (event: any) => {
    props.setUser((prevUser: any) => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = () => {
    props.setHideForm(false);
  };

  return (
    <div className="main" style={props.darkMode ? styles.mainDarkMode : {}}>
      {props.hideForm ? (
        <>
          <div
            className="side-title"
            style={props.darkMode ? { ...styles.sideTitleDarkMode } : {}}
          >
            <h1
              className="header-title"
              style={props.darkMode ? { ...styles.titleDarkMode } : {}}
            >
              Who are you?
            </h1>
          </div>
          <div className="form">
            <input
              className="input"
              style={props.darkMode ? { ...styles.inputDarkTheme } : {}}
              type="text"
              value={props.user.nickname}
              placeholder="Nickname - required"
              required
              onChange={handleOnChange}
              name="nickname"
            />
            <input
              className="input"
              style={props.darkMode ? { ...styles.inputDarkTheme } : {}}
              type="text"
              value={props.user.realName}
              placeholder="Real Name - optional"
              onChange={handleOnChange}
              name="realName"
            />
            <button
              onClick={handleSubmit}
              style={props.darkMode ? { ...styles.btnDarkMode } : {}}
            >
              {props.user.nickname? "Confirm":"Skip This"}
            </button>
          </div>
        </>
      ) : (
        <h3
          className="header-title"
          style={props.darkMode ? { ...styles.titleDarkMode } : {}}
        >
          "Thanks For Playing Tenzies!"
        </h3>
      )}
    </div>
  );
};
export default UserForm;
