import React, { useState } from 'react';
import "./App.css"

function App() {
  //Declaring state
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState('')
  //The function "getWeather" fetches weather data from the OpenWeatherMap API. 
  //It takes the "event" as an argument and checks if the event key is "Enter". 
  //If it is, the "fetch" method is used to make a request to the API and retrieve the weather data. 
  //The response is then converted to JSON format and the state variables "weatherData" and "city" are updated using the setter functions.
  const getWeather = (event) => {
    if (event.key == "Enter")
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69ef8cc2132af176ceccb40088699879`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        }
        )
  }
  // The first conditional statement checks if the "main" property of "weatherData" is defined, if it is the 'weather-data' is displayed, which shows the city name, temperature, and weather condition.
  //The second conditional statement checks if the "cod" property of "weatherData" is 404. If it is, a message "City not found" is displayed.
  return (
    <div className='container'>
      <input className='input' 
      placeholder='Enter city...'
      onChange={e => setCity(e.target.value)}
      value = {city}
      onKeyDown = {getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <h1>Welcome to Weather App! Enter your city</h1>
        </div>
      ) : (
        <div className='weather-data'>
          <h2 className='city'>{weatherData.name}</h2>
          <p>{Math.round(weatherData.main.temp)}°F</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City not found</p>
      ): (
        <>
        </>
      )}
    </div>
  )
}

export default App