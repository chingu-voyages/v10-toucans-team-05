import React, { Component } from 'react';
import { getCurrLocation, callWeatherApi } from '../utils.js';

import WeatherDisplay from "./WeatherDisplay";
import WeatherLocation from "./WeatherLocation";

// get current location (lat long via Geolocation API)
// pass location into call to openweather API
// openweather API returns weather for location
// render on page
    // separate location and weather into different child components?
// additional component for weather lightbox upon clicking weather icon?
class Weather extends Component {
    componentDidMount() {
        getCurrLocation().then(values => {
            callWeatherApi(values);
        }).catch(e => { console.log(e)});
    }

    render() {
        return(
            <div id="weather">
                <WeatherDisplay />
                <WeatherLocation />
            </div>
        )
    }
}

export default Weather;