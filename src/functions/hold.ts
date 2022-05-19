const hold = (id: string,setFunction: Function) => {
    setFunction((oldDice: any) =>
      oldDice.map((die: any) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : { ...die };
      })
    );
  };
  export default hold