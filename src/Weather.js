import React, { useState } from "react";
import "./Style.css";
import './mdb.min.css';
import Video from "./Video"
import axios from "axios"

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ ready:false });

  function handleResponse(response) { 
    console.log(response.data);
    setWeatherData({
      ready : true,
      Temperature : response.data.main.temp,
      City : response.data.name,
      Wind : response.data.wind.speed,
      Humidity : response.data.main.humidity,
      FeelsLike : response.data.main.feels_like,
      Description : response.data.weather[0].description,
      MaxTemp : response.data.main.temp_max,
      MinTemp : response.data.main.temp_min,
      DateTime : "Monday Sucks",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252035.png"
    })

   }


  if(weatherData.ready){  return (

    <div className="container">
        <Video />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <h3 className="mb-4 pb-2 fw-normal title">
              Check the Weather Forecast
            </h3>

            <div className="button-container input-group rounded mb-3">
              <input
                type="search"
                className="form-control rounded"
                placeholder="City"
                aria-label="Search"
                aria-describedby="search-addon"
                id="search-field"
              />
              <a href="#!" type="button">
                <span
                  className="btn btn-primary check"
                  id="searchButton"
                >
                  Check!
                </span>
              </a>
            </div>
            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-6">
                    <h4 className="mb-1 sfw-normal">{weatherData.City}</h4>

                    <p className="mb-2" id="dayTime">
                      Time: <strong>{weatherData.DateTime}</strong>
                    </p>
                  </div>
                  <div className="col-6">
                    <img className="icon-div" id="current-icon" src={weatherData.iconUrl} alt={weatherData.Description} />
                  </div>
                </div>

                <p className="mb-2">
                  Current temperature: <strong id="current-temp">{Math.round(weatherData.Temperature)} <a href="#" id="toCelesius">°C </a><a href="#" id="toFaranheit">| °F</a></strong>
                </p>
                <p className="mb-2">
                  Wind Speed: <strong id="wind-speed">{Math.round(weatherData.Wind)} km/hr </strong>
                </p>
                <p className="mb-2">
                  Humidity: <strong id="air-humidity">{Math.round(weatherData.Humidity)}% </strong>
                </p>
                <p>
                  Feels like: <strong id="feels-like">{Math.round(weatherData.FeelsLike)}°C</strong>
                </p>
                <p>
                  Max: <strong id="high">{Math.round(weatherData.MaxTemp)}°C</strong> , Min:{" "}
                  <strong id="low"> {Math.round(weatherData.MinTemp)}°C</strong>
                </p>
                <div className="d-flex flex-row align-items-center">
                  <p className="mb-0 me-4 text-capitalize" id="weather-description">
                    {weatherData.Description}
                  </p>
                  <i className="fas fa-cloud fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opn">
            <a href="https://github.com/BitaHm/react-weather">Open-source project - Coded by Bita H.</a>
      </div>
      </div>
    </div>
  );}else{
    
  const apiKey = "db76eb94032db381b6033ef59e08505b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`

  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
}

}