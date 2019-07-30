import React from "react";
import "./styling/App.css";

import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import MainGoal from "./components/MainGoal";

import { getCurrLocation, callWeatherApi } from "./utils.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        temp: "",
        icon: []
      }
    };
  }
  componentDidMount() {
    getCurrLocation()
      .then(values => {
        return callWeatherApi(values);
      })
      .then(data => {
        this.setState({
          data: {
            name: data.name,
            temp: data.main.temp.toFixed(0),
            icon: data.weather
          }
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="app">
        <Greeting />
        <MainGoal />
        <Weather temp={this.state.data} />
      </div>
    );
  }
}

export default App;
