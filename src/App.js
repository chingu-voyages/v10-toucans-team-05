import React from "react";
import "./styling/App.css";

import Greeting from "./components/Greeting";
import Weather from "./components/Weather";

import { getCurrLocation, callWeatherApi } from './utils.js';

class App extends React.Component{

constructor(props){
  super(props)

  this.state = {
data:{
  name: "",
  temp: "",
  icon: []
}
  }
}
  componentDidMount(){
        let temp = getCurrLocation().then(values => {
            return callWeatherApi(values)   
        }).then(data => {
    
          let far = (((+data.main.temp) - 273.15) * 9/5 + 32).toFixed(0)
            this.setState({
              data:{
              name:data.name,
              temp: far,
              icon: data.weather
          }
        })
      })
        .catch(e => { console.log(e)});
    }
  
  render(){
    return(
      <div className="app">
      <Greeting />
      <Weather temp={this.state.data}/>  
    </div>
    )
  }
}


export default App;
