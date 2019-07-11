import React, { Component } from 'react';

// get current location (lat long via Geolocation API)
// pass location into call to openweather API
// openweather API returns weather for location
// render on page
// additional component for weather lightbox upon clicking weather icon?
class Weather extends Component {
    getCurrLocation() {
        let lat, long;

        const geo_error = (error) => {
            console.log('geolocation not available');
        }

        if (window.navigator.geolocation) {
            console.log('geolocation on');
            navigator.geolocation.getCurrentPosition((pos) => {
                lat = pos.coords.latitude;
                long = pos.coords.longitude;

                console.log(`Current position: Latitude = ${lat}, Longitude = ${long}`);
                }, geo_error
            );
        }

    }

    componentDidMount() {
        this.getCurrLocation();
    }

    render() {
        return(
            <div>
            
            </div>
        )
    }
}

export default Weather;