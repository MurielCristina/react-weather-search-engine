import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./WeatherSearchEngine.css";

export default function WeatherSearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data.daily[0].condition.icon_url);

    setWeatherData({
      ready: true,
      temperature: response.data.daily[0].temperature.day,
      city: response.data.city,
      country: response.data.country,
      description: response.data.daily[0].condition.description,
      humidity: response.data.daily[0].temperature.humidity,
      wind: response.data.daily[0].wind.speed,
      iconUrl: response.data.daily[0].condition.icon_url,
      icon: response.data.daily[0].condition.icon,
      fullDate: new Date(response.data.daily[0].time * 1000),
    });
  }
  if (weatherData.ready) {
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
          <FormattedDate timeStamp={weatherData.fullDate} />
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
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.defaultCity}&key=73050fa355794447f81ab5349190dotd&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
