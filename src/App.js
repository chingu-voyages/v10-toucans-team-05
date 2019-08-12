import React from "react";
import "./styling/App.css";
import TopContainer from "./components/TopContainer";
import MiddleContainer from "./components/MiddleContainer";

import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="app">
      <TopContainer />
      <MiddleContainer />
      <Todo />
    </div>
  );
};

export default App;
