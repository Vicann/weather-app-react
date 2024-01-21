import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

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
              <WeatherIcon code={props.data.icon} size={70} />
            </div>
            <div className="float-left" id="fahrenheit-temp">
              {Math.round(props.data.temperature)}° F
            </div>
          </div>
        </div>
        <ul>
          <li className="elements">Humidity: {props.data.humidity}</li>
          <li className="elements">Wind: {props.data.wind} mph</li>
        </ul>
      </div>
    </div>
  );
}
