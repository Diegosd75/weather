import React, { Component } from 'react';



class WheaterInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=medellin&appid=e722b4d0a21b8ee0ba3d027042e7c220')
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        this.setState({datosname : datos.name, datostemp : datos.main.temp.toFixed(0), 
          datosweather : datos.weather[0].main, datosmintemp : datos.main.temp_min.toFixed(0), datosmaxtemp : datos.main.temp_max.toFixed(0),
        datosfeel : datos.main.feels_like.toFixed(0), datoshum : datos.main.humidity})
      });
         
  }
  render() {
    return (
      <div>
        {console.log(this.state.datosweather)}
        <h3>Current City</h3>
        <h1>{this.state.datosname}, Co</h1>
        <h2>{this.state.datostemp - 273}ºC</h2>
        <h3>{this.state.datosweather}</h3>
        <h4>{this.state.datosmintemp - 273}ºC Temp min</h4>
        <h4>{this.state.datosmaxtemp - 273}ºC Temp max</h4>
        <h4>{this.state.datosfeel - 273}ºC Feel Like</h4>
        <h4>{this.state.datoshum}% humidity</h4>
      </div>
    );
  }
   
}

export default WheaterInfo;