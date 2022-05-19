import newDice from "./newDice";

const newGame = (setDiceFunction: Function, setTenziesFunction: Function) => (
  setDiceFunction(newDice()), setTenziesFunction(false)
);
export default newGame;
