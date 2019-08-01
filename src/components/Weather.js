import React, { useState, useEffect } from "react";

import WeatherDisplay from "./WeatherDisplay";
import WeatherLocation from "./WeatherLocation";

import { getCurrLocation, callWeatherApi } from "../utils";

const Weather = props => {
  const [todayWeather, setTodayWeather] = useState(0);
  const [userLocation, setUserLocation] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    async function getWeather() {
      let currLoc = await getCurrLocation();
      let weather = await callWeatherApi(currLoc);
      setTodayWeather(weather.main.temp);
      setUserLocation(weather.name);
      setWeatherIcon(weather.weather[0].icon);
    }
    getWeather();
  }, []);
  return (
    <section className="weather white">
      <WeatherLocation curr={todayWeather} icon={weatherIcon} />
      <WeatherDisplay name={userLocation} />
    </section>
  );
};

export default Weather;
