import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="weather icon"
              className="secondaryImage"
            />
          </div>
          <div>
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
        {/*delete from here */}
        {/*until here */}
      </div>
    </div>
  );
}
