import React from "react";

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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.timeStamp.getDay()];
  let date = props.timeStamp.getDate();
  let month = months[props.timeStamp.getMonth()];
  let year = props.timeStamp.getFullYear();
  let hours = props.timeStamp.getHours().toString().padStart(2, 0);
  let minutes = props.timeStamp.getMinutes().toString().padStart(2, 0);

  return (
    <div>
      {hours}:{minutes} | {day} {date}, {month} {year}.
    </div>
  );
}
