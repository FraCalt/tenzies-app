import React from "react";
import Die from "./Die";
import newDice from "../functions/newDice";
import hold from "../functions/hold";
import roll from "../functions/roll";
import newGame from "../functions/newGame";
import styles from "../styles/darkTheme";
import { BsArrowClockwise } from "react-icons/bs";

const Hero = (props: any) => {
  const [dice, setDice] = React.useState(newDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const valueToMatch = dice[0].value;
    const allMatch = dice.every((die) => die.value === valueToMatch);
    if (allHeld && allMatch) {
      setTenzies(true);
    }
  }, [dice]);

  const renderDice = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      hold={() => hold(die.id, setDice)}
      darkMode={props.darkMode}
    />
  ));

  return (
    <div
      className="hero-container"
      style={props.darkMode ? { ...styles.container } : {}}
    >
      <div className="dice-container">{renderDice}</div>
      <button
        style={props.darkMode ? { ...styles.btnDarkMode } : {}}
        onClick={
          tenzies ? () => newGame(setDice, setTenzies) : () => roll(setDice)
        }
      >
        {tenzies ? (
          <p
            style={
              props.darkMode
                ? { ...styles.rollIconDarkMode }
                : { color: "darkred" }
            }
          >
            New Game
          </p>
        ) : (
          <BsArrowClockwise
            size={"27px"}
            style={
              props.darkMode
                ? { ...styles.rollIconDarkMode }
                : { color: "darkred" }
            }
          />
        )}
      </button>
      {tenzies && <h3>{"CONGRATULATION YOU WON!!!"}</h3>}
    </div>
  );
};

export default Hero;
