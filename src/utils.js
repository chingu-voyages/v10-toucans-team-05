/* Helper functions for app:
Get current location from Geolocation API
Get weather at current location using Openweather API
Retrieve one random quote from Quotes REST API
*/
const API_KEY = '0e8c6a8ba216d2b0fafe868b7bf978c3';

export function getCurrLocation() {
    const geo_error = () => {
        console.log('geolocation not available');
    }

    if (window.navigator.geolocation) {
        console.log('geolocation on');

        return new Promise((resolve, reject) => { 
            let lat, long, apiUrl;
            navigator.geolocation.getCurrentPosition(pos => {  
                resolve(
                    [
                        lat = pos.coords.latitude,
                        long = pos.coords.longitude,
                        apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${API_KEY}`
                    ]
                )},
                error => { reject(geo_error) }
            );  
        })
    }
    
}

export function callWeatherApi(val) {
 
    const url = val[2];
    return fetch(url).then(resp => {
        if (resp.ok) {
            return resp.json()
        } else {
            return Promise.reject('Openweathermap data unable to load');
        }
        }).catch(error => console.log('Error: ', error));
    
}

export function callQuoteApi() {

    const QUOTE_URL = 'http://quotes.rest/qod.json?category=inspire';
    return fetch(QUOTE_URL).then(resp => {
        if (resp.ok) {
            console.log(resp.status);
            return resp.json();
        } else {
            return Promise.reject('Unable to retrieve quote');
        }
    }).catch(e => console.log('Error: ', e));
}
