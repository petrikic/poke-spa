import "./TypeContainer.css";
import Type from "./Type";
import capitalize from '../utils/capitalize';

function TypeContainer(props) {
  const arr = props.types ? props.types : [];
  const types = arr.map((type) => <Type classType={capitalize(type.type.name)}></Type>);
  return <section className="type-container">{types}</section>;
}

export default TypeContainer;
