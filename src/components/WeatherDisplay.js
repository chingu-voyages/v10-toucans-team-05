import React from "react";

const WeatherDisplay = props => {
  return <div className="current-weather">{props.name}</div>;
};

export default WeatherDisplay;
