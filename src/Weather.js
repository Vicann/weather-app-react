import React from "react";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Monday",
    decription: "Cloudy",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="weather-wrap">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <small>
              Last updated: {weatherData.date} 10:00 <span></span>
            </small>
          </li>
          <li>
            <small>{weatherData.description}</small>
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature weather-temperature">
              <img src={weatherData.imgURL} className="float-left" />
              <div className="float-left">
                <strong id="temperature"></strong>
                <span className="units"> °F | °C </span>
              </div>
            </div>
          </div>
          <ul>
            <li className="elements">Humidity: {weatherData.humidity}</li>
            <li className="elements">Wind: {weatherData.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
