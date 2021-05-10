import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
