import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./WeatherSearchEngine.css";

export default function WeatherSearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCiy] = useState(props.defaultCity);
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
  function search() {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=73050fa355794447f81ab5349190dotd&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearchEngine">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="formSearch"
            autoFocus="on"
            onChange={(event) => setCiy(event.target.value)}
          />
          <input type="submit" value="Search" className="formSubmit" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
