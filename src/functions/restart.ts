import newDice from "./newDice";

const restart = (setDiceFunction: Function, setrUserFunction: Function) => (
  setDiceFunction(newDice()),
  setrUserFunction((prevUser: any) => ({
    ...prevUser,
    heldCount: 0,
    rollCount: 0,
    tenzies: false,
  }))
);
export default restart;
