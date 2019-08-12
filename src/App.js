import React from "react";
import "./styling/App.css";

import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import MainGoal from "./components/MainGoal";
import Quote from "./components/Quote";

const App = () => {
  return (
    <div className="app">
      <Weather />
      <Greeting />
      <MainGoal />
      <Quote />
    </div>
  );
};

export default App;
