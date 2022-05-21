const countRoll = (setFunction: Function) => {
    setFunction((prevUser: any) => ({
      ...prevUser,
      rollCount: prevUser.rollCount + 1,
    }));
  };
  export default countRoll;