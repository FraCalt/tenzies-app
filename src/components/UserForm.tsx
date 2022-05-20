import React from "react";
import { nanoid } from "nanoid";
import "../styles/style.css";
import styles from "../styles/darkTheme";

const UserForm = (props: any) => {
  const [formData, setFormData] = React.useState({
    nickname: "",
    realName: "",
  });
  const [hideForm, setHideForm] = React.useState(true);

  const handleOnChange = (event: any) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = () => {
    localStorage.setItem(nanoid(), JSON.stringify(formData));
    setHideForm(false);
  };

  return (
    <div className="main" style={props.darkMode ? styles.mainDarkMode : {}}>
      {hideForm ? (
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
              value={formData.nickname}
              placeholder="Nickname"
              onChange={handleOnChange}
              name="nickname"
            />
            <input
              className="input"
              style={props.darkMode ? { ...styles.inputDarkTheme } : {}}
              type="text"
              value={formData.realName}
              placeholder="Real Name"
              onChange={handleOnChange}
              name="realName"
            />
            <button
              onClick={handleSubmit}
              style={props.darkMode ? { ...styles.btnDarkMode } : {}}
            >
              Confirm
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
