import { nanoid } from "nanoid";
import React from "react";
import styles from "../styles/darkTheme";
import "../styles/style.css";

const Leaderboard = (props: any) => {
  const [players, setPlayers] = React.useState<any>([]);

  React.useEffect(() => {
    const arrayFromStorage = [];
    for (let i = 0; i < localStorage.length; i++) {
      let tempKey = localStorage.key(i);
      arrayFromStorage.push(JSON.parse(localStorage.getItem(tempKey!)!));
    }
    setPlayers(arrayFromStorage);
  }, []);

  const renderList = players.map((item: any) => (
    <li key={nanoid()}>
    {item.realName} {item.nickname} {item.tenzies&&"TENZIES"}
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
          Top Players
        </h1>
      </div>
      <div
        className="list-container"
        style={props.darkMode ? { ...styles.playerListDarkMode } : {}}
      >
        <ol className="list">{renderList}</ol>
      </div>
    </div>
  );
};
export default Leaderboard;
