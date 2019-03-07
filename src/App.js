import React, { Component } from "react";
import "../src/styles/styles.scss";
import LandingPage from "./components/container/LandingPage";
import RecipeContainer from "../src/components/container/RecipeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <RecipeContainer />
      </div>
    );
  }
}

export default App;
