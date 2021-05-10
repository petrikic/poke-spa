import "./Cards.css";
import React from "react";
import axios from "axios";
import PokeCard from "./PokeCard";

async function getPokemons(url, params) {
  return (await axios.get(url, { params })).data.results;
}

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      params: {
        offset: 0,
        limit: 24,
      },
    };
  }

  async componentDidMount() {
    this.carregar();
  }

  async carregar() {
    let offset = this.state.params.offset + this.state.params.limit;
    let limit = this.state.params.limit;
    this.setState({
      params: { offset, limit },
      pokemons: this.state.pokemons.concat(
        await getPokemons(this.props.url, this.state.params)
      ),
    });
  }

  render() {
    let val = this.state.pokemons.map((pokemon) => (
      <PokeCard url={pokemon.url}></PokeCard>
    ));
    return <section className="pokemons">{val}</section>;
  }
}
