import { nanoid } from "nanoid";
import React from "react";
import Hero from "./components/Hero";
import Leaderboard from "./components/Leaderboard";
import SwitchTheme from "./components/SwitchTheme";
import UserForm from "./components/UserForm";
import toggleTheme from "./functions/toggleTheme";
import "./styles/style.css";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [hideForm, setHideForm] = React.useState(true);
  const [start, setStart] = React.useState(false);
  const [user, setUser] = React.useState({
    id: nanoid(),
    heldCount: 0,
    rollCount: 0,
  });

  console.log(user);

  return (
    <div
      className="wallpaper"
      style={darkMode ? { backgroundColor: "#1a1823" } : {}}
    >
      <img className="dice-image" src="/images/die.png"/>
      <SwitchTheme
        darkMode={darkMode}
        toggle={() => toggleTheme(setDarkMode)}
      />
      {hideForm ? (
        <>
          <UserForm
            darkMode={darkMode}
            user={user}
            setUser={setUser}
            hideForm={hideForm}
            setHideForm={setHideForm}
          />
          <Leaderboard darkMode={darkMode} user={user} />
        </>
      ) : (
        <Hero
          start={start}
          setStart={setStart}
          darkMode={darkMode}
          user={user}
          setUser={setUser}
        />
      )}
    </div>
  );
};

export default App;
