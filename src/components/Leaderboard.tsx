import { nanoid } from "nanoid";
import React from "react";
import styles from "../styles/darkTheme";
import "../styles/style.css";

const Leaderboard = (props: any) => {
  const [players, setPlayers] = React.useState<any>([]);

  React.useEffect(() => {
    const arrayFromStorage: any[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      let tempKey = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(tempKey!)!);
      item.tenzies && arrayFromStorage.push(item);
      arrayFromStorage.sort((item1,item2) => item1.rollCount-item2.rollCount );
    }
    setPlayers(arrayFromStorage);
  }, []);

  const renderList = players.map((item: any) => (
    <li key={nanoid()}>
      <div className="text-list">
        <p>
          {item.realName && "name:"}
          {item.realName}
        </p>
        <p>aka:{item.nickname}</p>
        <p>held:{item.heldCount}</p>
        <p>rolls:{item.rollCount}</p>
        <p>{item.tenzies && "Complete"}</p>
      </div>
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
          Leaderboard
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
