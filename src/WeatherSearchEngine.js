import React from "react";
import "./WeatherSearchEngine.css";

export default function WeatherSearchEngine() {
  return (
    <div className="WeatherSearchEngine">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="formSearch"
        />
        <input type="submit" value="Search" className="formSubmit" />
      </form>
      <h3>Ney York, USA</h3>
      <ul>
        <li>Wednesday September 3, 2024</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="sunny"
          />
          <h2>24ºC</h2>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 81%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
