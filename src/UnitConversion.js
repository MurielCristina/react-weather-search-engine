import React, { useState } from "react";

export default function UnitConversion(props) {
  const [units, setUnits] = useState("celsius");
  const [degrees, setDegrees] = useState(
    Math.round(props.temperatureInCelsius)
  );

  function farenheit(event) {
    setUnits("farenheit");
    setDegrees(Math.round(props.temperatureInCelsius * (9 / 5) + 32));
  }
  function celsius(event) {
    setUnits("celsius");
    setDegrees(Math.round(props.temperatureInCelsius));
  }

  if (units === "celsius") {
    return (
      <div className="UnitConversion">
        <span className="temperature">
          {degrees}
          <small>
            °C |{" "}
            <a href="#" onClick={farenheit}>
              °F
            </a>
          </small>
        </span>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        <span className="temperature">
          {degrees}
          <small>
            <a href="#" onClick={celsius}>
              °C
            </a>{" "}
            | °F
          </small>
        </span>
      </div>
    );
  }
}
