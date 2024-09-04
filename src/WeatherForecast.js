import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        {props.data.map((dailyForecast, index) => {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay forecastDay={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
