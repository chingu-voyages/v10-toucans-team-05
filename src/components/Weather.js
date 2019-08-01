import React from "react";

import WeatherDisplay from "./WeatherDisplay";
import WeatherLocation from "./WeatherLocation";

const Weather = props => {
  return (
    <div id="weather">
      <WeatherDisplay name={props.temp.name} />
      <WeatherLocation curr={props.temp} />
    </div>
  );
};

export default Weather;
