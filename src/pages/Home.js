import React from "react";

import Cards from "../components/Cards";

class Home extends React.Component {
  url = "https://pokeapi.co/api/v2/pokemon/";
  child = React.createRef();
  infiniteScrollRef = React.createRef();

  componentDidMount() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const ratio = entries[0].intersectionRatio;
      if (ratio > 0) {
        this.child.current.carregar();
      }
    });

    intersectionObserver.observe(this.infiniteScrollRef.current);
  }

  render() {
    return (
      <div className="app-container">
        <Cards url={this.url} ref={this.child}></Cards>
        <div ref={this.infiniteScrollRef}>-</div>
      </div>
    );
  }
}

export default Home;
