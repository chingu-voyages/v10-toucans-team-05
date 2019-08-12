import React from "react";
import "./styling/App.css";
import TopContainer from "./components/TopContainer";
import MiddleContainer from "./components/MiddleContainer";

// import Greeting from "./components/Greeting";
// import Weather from "./components/Weather";
// import MainGoal from "./components/MainGoal";
import Quote from "./components/Quote";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="app">
      <TopContainer />
      <MiddleContainer />
      {/* <Weather />
      <Greeting />
      <MainGoal /> */}
      <Quote />
      <Todo />
    </div>
  );
};

export default App;
