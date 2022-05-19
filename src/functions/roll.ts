import generateDie from "./generateDie";

const roll = (setFunction: Function) => (
  setFunction((oldDice: any) =>
    oldDice.map((die: any) => {
      return die.isHeld === true ? die : generateDie();
    })
  )
);

export default roll;
