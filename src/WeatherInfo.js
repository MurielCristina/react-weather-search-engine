import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3>
        {props.data.city}, {props.data.country}
      </h3>
      <ul>
        <FormattedDate timeStamp={props.data.fullDate} />
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 temperature-container">
          <img
            src={props.data.icon_url}
            alt={props.data.icon}
            className="mainImage"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
            <small>°C</small>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span>{props.data.wind}km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
