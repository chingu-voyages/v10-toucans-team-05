import React from 'react';

import WeatherDisplay from "./WeatherDisplay";
import WeatherLocation from "./WeatherLocation";


const Weather = (props) => {
console.log(props.temp)
return(
    <div id="weather">
    <WeatherDisplay name={props.temp.name} />
    <WeatherLocation curr={props.temp.temp}/>
</div> 
)
}

export default Weather;