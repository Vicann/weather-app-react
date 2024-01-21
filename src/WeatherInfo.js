import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <small>
            <FormattedDate date={props.data.date} />
          </small>
        </li>
        <li>
          <small>{props.data.description}</small>
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature weather-temperature">
            <div className="floar-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <strong className="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units"> °F </span>
            </div>
          </div>
        </div>
        <ul>
          <li className="elements">Humidity: {props.data.humidity}</li>
          <li className="elements">Wind: {props.data.wind} mi/hr</li>
        </ul>
      </div>
    </div>
  );
}
