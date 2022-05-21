import styles from "../styles/darkTheme";

const Die = (props: any) => {
  const stylesHeld = {
    backgroundColor: "lightgreen",
  };

  const clickHandler = () => {
    props.hold();
    props.count();
  };

  return (
    <div
      className="die-div"
      style={
        props.isHeld
          ? props.darkMode
            ? { ...styles.dieDarkMode, ...stylesHeld }
            : { ...stylesHeld }
          : props.darkMode
          ? { ...styles.dieDarkMode }
          : {}
      }
      onClick={clickHandler}
    >
      <h1
        className="die-num"
        style={props.darkMode ? { ...styles.dieNumDarkMode } : {}}
      >
        {props.value}
      </h1>
    </div>
  );
};

export default Die;
