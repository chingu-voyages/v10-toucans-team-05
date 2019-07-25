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
  temp: ""
}
  }
}
  componentDidMount(){
        let temp = getCurrLocation().then(values => {
            return callWeatherApi(values)   
        }).then(data => {
            this.setState({
              data:{
                name:data.name,
              temp: data.main.temp
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
