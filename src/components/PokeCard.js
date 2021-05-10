import "./PokeCard.css";
import React from "react";
import axios from "axios";
import ImageCard from "./PokeImage";
import TypeContainer from "./TypeContainer";
import capitalize from "../utils/capitalize";
import { Link } from "react-router-dom";

async function getPokemon(url) {
  return (await axios.get(url)).data;
}

function buildImage(id) {
  if (!id) return;
  return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
}

export default class PokeCard extends React.Component {
  state = { pokemon: "" };

  async componentDidMount() {
    const pokemon = await getPokemon(this.props.url);
    this.setState({ pokemon: pokemon });
  }

  render() {
    let img = buildImage(this.state.pokemon.id);
    let { id, name, types } = this.state.pokemon;

    return (
      <Link to={`/pokemon/${id}`}>
        <div className="poke-card">
          <ImageCard imagem={img}></ImageCard>
          <div className="poke-info">
            <span>N°{id}</span>
            <h5>{capitalize(name)}</h5>
            <TypeContainer types={types}></TypeContainer>
          </div>
        </div>
      </Link>
    );
  }
}
