import startGame from "../functions/startGame";
import toggleTheme from "../functions/toggleTheme";
import styles from "../styles/darkTheme";
import DiceBox from "./DiceBox";
import Header from "./Header";

const Hero = (props: any) => {
  return (
    <main
      className="main"
      style={props.darkMode ? { ...styles.mainDarkMode } : {}}
    >
      <Header
        darkMode={props.darkMode}
        toggle={() => toggleTheme(props.setDarkMode)}
      />
      {props.start ? (
        <DiceBox
          darkMode={props.darkMode}
          user={props.user}
          setUser={props.setUser}
        />
      ) : (
        <button
          style={
            props.darkMode ? { ...styles.btnDarkMode } : { color: "darkred" }
          }
          onClick={() => startGame(props.setStart)}
        >
          START
        </button>
      )}
    </main>
  );
};
export default Hero;
