/* Helper functions for app:
Get current location from Geolocation API
Get weather at current location using Openweather API
*/
const API_KEY = '0e8c6a8ba216d2b0fafe868b7bf978c3';

export function getCurrLocation() {
    const geo_error = () => {
        console.log('geolocation not available');
    }

    if (window.navigator.geolocation) {
        console.log('geolocation on');

        return new Promise((resolve, reject) => { 
            let lat, long, API_URL;
            navigator.geolocation.getCurrentPosition(pos => {  
                resolve(
                    [
                        lat = pos.coords.latitude,
                        long = pos.coords.longitude,
                        API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
                    ]
                )},
                error => { reject(geo_error) }
            );  
        })
    }
    
}

export function callWeatherApi(val) {
    console.log('api url here', val[2]);
    
}
