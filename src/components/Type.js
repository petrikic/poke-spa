import "./Type.css";

function Type(props) {
  return (
    <div className={"poke-type " + props.classType}>
      <span>{props.classType}</span>
    </div>
  );
}

export default Type;
