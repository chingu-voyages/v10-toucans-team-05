import React from 'react'


const WeatherLocation = (props) => {
    console.log(typeof props.curr, "weather location");
    return (
        
        <div className="current-location">
      {props.curr}
        </div>
    )

}

export default WeatherLocation