import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./style.css";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <main
      style={darkMode ? { backgroundColor: "#4b4761", color: "white" } : {}}
    >
      <Header darkMode={darkMode} toggle={toggleTheme} />
      <Hero darkMode={darkMode} />
    </main>
  );
};

export default App;
