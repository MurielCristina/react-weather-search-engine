import React from "react";

import "./WeatherSearchEngine.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[props.timeStamp.getDay()];
  let date = props.timeStamp.getDate();
  let month = months[props.timeStamp.getMonth()];
  let year = props.timeStamp.getFullYear();

  return (
    <div className="FormattedDate">
      {day} {date}, {month} {year}.
    </div>
  );
}
