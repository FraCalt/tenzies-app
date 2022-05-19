import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import { setTimeout } from "timers";
import Header from "./components/Header";
import Hero from "./components/Hero";
import startGame from "./functions/startGame";
import toggleTheme from "./functions/toggleTheme";
import "./style.css";
import styles from "./styles/darkTheme";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [start, setStart] = React.useState(false);

  return (
    <div
      className="wallpaper"
      style={darkMode ? { backgroundColor: "#1a1823" } : {}}
    >
      <main style={darkMode ? { ...styles.mainDarkMode } : {}}>
        <Header darkMode={darkMode} toggle={() => toggleTheme(setDarkMode)} />
        {start ? (
          <Hero darkMode={darkMode} />
        ) : (
          <button
            style={darkMode ? { ...styles.btnDarkMode } : { color: "darkred" }}
            onClick={() => startGame(setStart)}
          >
            START
          </button>
        )}
      </main>
    </div>
  );
};

export default App;
