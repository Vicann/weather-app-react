import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
//import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="cityName">{props.data.city}</h1>
      <FormattedDate date={props.data.date} /> , {props.data.description}
      <div>
        Humidity: {props.data.humidity}% , Wind: {props.data.wind} km/h
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature weather-temperature">
            <div id="icon" className="floar-left">
              <WeatherIcon
                style={{ display: "inline" }}
                code={props.data.icon}
                size={120}
              />
            </div>

            <div className="float-right" id="fahrenheit-temp">
              {Math.round(props.data.temperature)}
              <span id="F">° F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
