const countHeld = (setFunction: Function) => {
  setFunction((prevUser: any) => ({
    ...prevUser,
    heldCount: prevUser.heldCount + 1,
  }));
};
export default countHeld;
