import generateDie from "./generateDie";

const newDice = () => {
  const allNewDice = [];
  for (let i = 0; i < 10; i++) {
    allNewDice.push(generateDie());
  }
  return allNewDice;
};
export default newDice;
