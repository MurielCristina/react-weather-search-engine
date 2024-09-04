import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  console.log(props.data);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay forecastDay={props.data[0]} />
        </div>
        {/*delete from here */}
        {/*until here */}
      </div>
    </div>
  );
}
