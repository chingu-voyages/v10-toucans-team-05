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
    constructor(props) {
        super(props);
        //console.log(this.props);
    }

    componentDidMount() {
        getCurrLocation().then(values => {
            return callWeatherApi(values)   
        }).then(data => {
            console.log(JSON.stringify(data));
            let currLocation = data.name;
            console.log(currLocation);

            let currTemp = data.main.temp;

            //need to pass down location and temp to WeatherDisplay and weatherLocation
            this.currLocation = currLocation;
            this.currTemp = currTemp;
        
        }).catch(e => { console.log(e)});
    }

    render() {
        return(
            <div id="weather">
                <WeatherDisplay temp={this.props.currTemp} />
                <WeatherLocation />
            </div>
        )
    }
}

export default Weather;