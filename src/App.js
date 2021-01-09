import React, { Component } from 'react';
import './App.css';
import $ from "jquery"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount() {
    $(document).ready(function(){
      $("#listSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
          $("#myList li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });           
    });
    fetch('http://api.openweathermap.org/data/2.5/weather?q=medellin&appid=e722b4d0a21b8ee0ba3d027042e7c220')
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        this.setState({datosnamemed : datos.name, datostempmed : datos.main.temp.toFixed(0), 
          datosweathermed : datos.weather[0].main,})
      });
      fetch('http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=e722b4d0a21b8ee0ba3d027042e7c220')
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        this.setState({datosnamebog : datos.name, datostempbog : datos.main.temp.toFixed(0), 
          datosweatherbog : datos.weather[0].main,})
      });
      fetch('http://api.openweathermap.org/data/2.5/weather?q=cali&appid=e722b4d0a21b8ee0ba3d027042e7c220')
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        this.setState({datosnamecal : datos.name, datostempcal : datos.main.temp.toFixed(0), 
          datosweathercal : datos.weather[0].main,})
      });
    }
    render(){ 
  return (
    <div className="App" >
      <header className="App-header">
        <input type="text" className="text-box" id="listSearch"/>
      </header>
      <main>
        <ul className="lista" id="myList" >           
          <li className="item1">{this.state.datosnamecal}, Co<br/>{this.state.datostempcal-273} ºC<br/> {this.state.datosweathercal}</li>
          <li className="item2">{this.state.datosnamebog}, Co<br/>{this.state.datostempbog-273} ºC<br/> {this.state.datosweatherbog}</li>
          <li className="item3">{this.state.datosnamemed}, Co<br/>{this.state.datostempmed-273} ºC<br/> {this.state.datosweathermed}</li>
        </ul>
      </main>
    </div>
  );}
}

export default App;