import "./Pokemon.css";

import React from "react";
import { Link } from "react-router-dom";
import PokeImage from "../components/PokeImage";
import Button from "../components/Button";

function buildImage(id) {
  if (!id) return;
  return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
}

export default class Pokemon extends React.Component {
  state = {
    id: this.props.match.params.id,
  };
  componentDidMount() {}

  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Link to="/">
          <Button id="voltar" name="Voltar" />
        </Link>
        <div className="pokemon-info">
          <PokeImage imagem={buildImage(id)} />
        </div>
      </div>
    );
  }
}
