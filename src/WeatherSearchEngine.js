import React, { useState } from "react";
import "./WeatherSearchEngine.css";
import axios from "axios";
export default function WeatherSearchEngine() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setReady(true);

    setWeatherData({
      temperature: response.data.daily[0].temperature.day,
      city: response.data.city,
      country: response.data.country,
      description: response.data.daily[0].condition.description,
      humidity: response.data.daily[0].temperature.humidity,
      wind: response.data.daily[0].wind.speed,
      iconUrl: response.data.daily[0].condition.icon_url,
      icon: response.data.daily[0].condition.icon,
    });
  }
  if (ready) {
    return (
      <div className="WeatherSearchEngine">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            className="formSearch"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="formSubmit" />
        </form>
        <h3>
          {weatherData.city}, {weatherData.country}
        </h3>
        <ul>
          <li>Wednesday September 3, 2024</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 temperature-container">
            <img
              src={weatherData.icon_url}
              alt={weatherData.icon}
              className="mainImage"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
              <small>°C</small>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span>{weatherData.humidity}%</span>
              </li>
              <li>
                Wind: <span>{weatherData.wind}km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let query = "Valencia";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=73050fa355794447f81ab5349190dotd&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
