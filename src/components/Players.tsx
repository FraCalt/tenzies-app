import { nanoid } from "nanoid";
import React from "react";
import styles from "../styles/darkTheme";
import "../styles/style.css";

const Players = (props: any) => {
  const [players, setPlayers] = React.useState<any>([]);

  React.useEffect(() => {
    const arrayFromStorage = [];
    for (let i = 0; i < localStorage.length; i++) {
      let tempKey = localStorage.key(i);
      arrayFromStorage.push(JSON.parse(localStorage.getItem(tempKey!)!));
    }
    setPlayers(arrayFromStorage);
  }, []);

  console.log(players, localStorage.length);

  const renderList = players.map((item: any) => (
    <li key={nanoid()}>
      {item.realName} {"--"} {item.nickname}{" "}
    </li>
  ));

  return (
    <div className="main" style={props.darkMode ? styles.mainDarkMode : {}}>
      <div
        className="side-title"
        style={props.darkMode ? { ...styles.sideTitleDarkMode } : {}}
      >
        <h1
          className="header-title"
          style={props.darkMode ? { ...styles.titleDarkMode } : {}}
        >
          Players
        </h1>
      </div>
      <div
        className="players-list"
        style={props.darkMode ? { ...styles.playerListDarkMode } : {}}
      >
        {renderList}
      </div>
    </div>
  );
};
export default Players;
