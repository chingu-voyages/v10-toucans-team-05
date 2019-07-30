import React from "react";

const WeatherLocation = props => {
  props.curr.icon
    .map(item => {
      return item.main;
    })
    .toString();
  return <div className="current-location white">{`${props.curr.temp}°`}</div>;
};

export default WeatherLocation;
