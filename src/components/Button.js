import "./Button.css";

function Button(props) {
  return <div id={props.id} className="my-button">{props.name}</div>;
}

export default Button;
