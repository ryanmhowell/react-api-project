import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "0187c47965077f7459a0530f4544fc1b";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if(city && country) {
    this.setState({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  } else {
    this.setState({
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter a value"
    });
  }
  }

  render() {
    return(

      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}/>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }


}




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;

