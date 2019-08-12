import React from "react";
import "./styling/App.css";

import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import MainGoal from "./components/MainGoal";
import Quote from "./components/Quote";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="app">
      <Weather />
      <Greeting />
      <MainGoal />
      <Quote />
      <Todo />
    </div>
  );
};

export default App;
