import React from "react";

const WeatherLocation = ({ curr, icon }) => {
  return (
    <div className="current-location">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        width="50"
        alt="Weather Icon based on forecast"
      />
      {`${parseInt(curr)}°`}
    </div>
  );
};

export default WeatherLocation;
