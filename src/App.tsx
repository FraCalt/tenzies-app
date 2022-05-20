import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import startGame from "./functions/startGame";
import toggleTheme from "./functions/toggleTheme";
import "./styles/style.css";
import styles from "./styles/darkTheme";
import LeaderBoard from "./components/Players";
import UserForm from "./components/UserForm";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [start, setStart] = React.useState(false);
  return (
    <div
      className="wallpaper"
      style={darkMode ? { backgroundColor: "#1a1823" } : {}}
    >
      <UserForm darkMode={darkMode} />
      <main className="main" style={darkMode ? { ...styles.mainDarkMode } : {}}>
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
      <LeaderBoard darkMode={darkMode} />
    </div>
  );
};

export default App;
