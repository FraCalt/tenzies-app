const Die = (props: any) => {
  const styles = {
    backgroundColor: "lightgreen",
  };

  return (
    <div
      className="die-div"
      style={props.isHeld ? styles : {}}
      onClick={props.hold}
    >
      <h1 className="die-num">{props.value}</h1>
    </div>
  );
};

export default Die;
