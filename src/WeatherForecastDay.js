import React from "react";

export default function WeatherforecastDay(props) {
  let forecastIconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.forecastDay.condition.icon}.png`;

  function maxTemp() {
    let temp = Math.round(props.forecastDay.temperature.maximum);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.forecastDay.temperature.minimum);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.forecastDay.time);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let shortDay = date.getDay();
    return days[shortDay];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={forecastIconUrl}
          alt={props.forecastDay.condition.icon}
          className="secondaryImage"
        />
      </div>
      <div>
        <span className="WeatherForecast-temp-max">{maxTemp()}</span>
        <span className="WeatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
