import {
  BsFillMoonFill,
  BsSunFill,
  BsToggleOff,
  BsToggleOn,
} from "react-icons/bs";

const SwitchTheme = (props: any) => {
  return (
    <div className="switch-box">
      {props.darkMode ? (
        <BsSunFill className="switch-icon" style={{ color: "lightcyan" }} />
      ) : (
        <BsFillMoonFill className="switch-icon" />
      )}
      {props.darkMode ? (
        <BsToggleOn
          className="switch"
          style={{ color: "lightcyan" }}
          onClick={props.toggle}
        />
      ) : (
        <BsToggleOff className="switch" onClick={props.toggle} />
      )}
    </div>
  );
};
export default SwitchTheme;
