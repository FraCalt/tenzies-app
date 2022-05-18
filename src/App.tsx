import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import "./style.css";

const App = () => {
  const generateDie = () => {
    return {
      id: nanoid(),
      isHeld: false,
      value: Math.ceil(Math.random() * 6),
    };
  };

  const newDice = () => {
    const allNewDice = [];
    for (let i = 0; i < 10; i++) {
      allNewDice.push(generateDie());
    }
    return allNewDice;
  };

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

  const hold = (id: string) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : { ...die };
      })
    );
  };

  const roll = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld === true ? die : generateDie();
      })
    );
  };
  const newGame = () => {
    setDice(newDice());
  };

  const renderDice = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      hold={() => hold(die.id)}
    />
  ));

  return (
    <main>
      <div className="content-container">
        <h1>TENZIES</h1>
        <div className="dice-container">{renderDice}</div>
        <button onClick={tenzies ? newGame : roll}>
          {tenzies ? "New Game" : "Roll"}
        </button>
        {tenzies && <p>{"CONGRATULATION YOU WON!!!"}</p>}
      </div>
    </main>
  );
};

export default App;
