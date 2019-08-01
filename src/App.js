import React from "react";
import "./styling/App.css";

import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import MainGoal from "./components/MainGoal";

const App = () => {
  return (
    <div className="app">
      <Weather />
      <Greeting />
    </div>
  );
};


export default App;
