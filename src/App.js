import React from "react";
import "./styling/App.css";

import Greeting from "./components/Greeting";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="app">
      <Greeting />
      <Weather />
    </div>
  );
}

export default App;
