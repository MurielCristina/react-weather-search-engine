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
          autoFocus="on"
        />
        <input type="submit" value="Search" className="formSubmit" />
      </form>
      <h3>Ney York, USA</h3>
      <ul>
        <li>Wednesday September 3, 2024</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6 temperature-container">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="sunny"
            className="mainImage"
          />
          <span className="temperature">
            24<small>°C</small>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Precipitation: <span>0%</span>
            </li>
            <li>
              Humidity: <span>81%</span>
            </li>
            <li>
              Wind: <span>13km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
