import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData(response.data.temperature.current);

    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: "Monday",
      description: response.data.condition.description,
      imgURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
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
                <img
                  src={weatherData.imgURL}
                  alt="weather img"
                  className="float-left"
                />
                <div className="float-left">
                  <strong className="temperature">
                    {Math.round(weatherData.temperature)}
                  </strong>
                  <span className="units"> °F </span>
                </div>
              </div>
            </div>
            <ul>
              <li className="elements">Humidity: {weatherData.humidity}</li>
              <li className="elements">Wind: {weatherData.wind} mi/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "22fat04acb303d8c0a139735789ed0od";
    let city = "New York";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
  }
}
