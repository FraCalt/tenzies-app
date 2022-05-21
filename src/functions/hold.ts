const hold = (id: string, setFunction: Function) => {
  setFunction((oldDie: any) =>
    oldDie.map((die: any) => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : { ...die };
    })
  );
};
export default hold;
