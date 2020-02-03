import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Games from "./components/Games";
import Attraction from "./components/Attractions";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Homepage /></Route>
        <Route path="/games"><Games /></Route>
        <Route path="/attractions"><Attraction /></Route>
      </Switch>
    </div>
  );
}

export default App;
