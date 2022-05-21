import React from "react";
import Die from "./Die";
import newDice from "../functions/newDice";
import hold from "../functions/hold";
import roll from "../functions/roll";
import countRoll from "../functions/countRoll";
import newGame from "../functions/newGame";
import countHeld from "../functions/countHeld";
import styles from "../styles/darkTheme";
import { BsArrowClockwise } from "react-icons/bs";
import ReactConfetti from "react-confetti";

const DiceBox = (props: any) => {
  const [dice, setDice] = React.useState(newDice());
  const [tenzies, setTenzies] = React.useState(false);

  const replaceItem = (key: string) => {
    localStorage.removeItem(key);
    localStorage.setItem(
      key,
      JSON.stringify({ ...props.user, tenzies: tenzies })
    );
  };

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const valueToMatch = dice[0].value;
    const allMatch = dice.every((die) => die.value === valueToMatch);
    if (allHeld && allMatch) {
      setTenzies(true);
    }

    props.user.nickname && replaceItem(props.user.id);
  }, [dice, tenzies]);

  const renderDice = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      hold={() => hold(die.id, setDice)}
      count={() => countHeld(props.setUser)}
      darkMode={props.darkMode}
    />
  ));

  return (
    <div
      className="dicebox-container"
      style={props.darkMode ? { ...styles.container } : {}}
    >
      <div className="dice-container">{renderDice}</div>
      <button
        style={props.darkMode ? { ...styles.btnDarkMode } : {}}
        onClick={
          tenzies
            ? () => newGame(setDice, setTenzies)
            : () => (roll(setDice), countRoll(props.setUser))
        }
      >
        {tenzies ? (
          <h4
            style={
              props.darkMode
                ? { ...styles.rollIconDarkMode }
                : { color: "darkred" }
            }
          >
            New Game
          </h4>
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
      {tenzies && (
        <div>
          <ReactConfetti />
          <h3>{"CONGRATULATION YOU WON!!!"}</h3>
        </div>
      )}
    </div>
  );
};

export default DiceBox;
