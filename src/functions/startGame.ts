const startGame = (setFunction: Function) => {
  setFunction((prevState: any) => !prevState);
};
export default startGame;
