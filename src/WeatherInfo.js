import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return   (
    <div className="WeatherInfo">
    <div className="card shadow-0 border">
    <div className="card-body p-4">
      <div className="row">
        <div className="col-6">
          <h4 className="mb-1 sfw-normal">{props.data.City}</h4>

          <div className="mb-2" id="dayTime">
            <span>
              <FormattedDate date={props.data.DateTime}/>
              </span>
          </div>
        </div>
        <div className="col-6">
          <div className="icon-div" id="current-icon">
          <WeatherIcon   code={props.data.icon} alt={props.data.Description}/>
          </div>
        </div>
      </div>

      <p className="mb-2">
        Current temperature: <strong id="current-temp">{Math.round(props.data.Temperature)} <a href="#" id="toCelesius">°C </a><a href="#" id="toFaranheit">| °F</a></strong>
      </p>
      <p className="mb-2">
        Wind Speed: <strong id="wind-speed">{Math.round(props.data.Wind)} km/hr </strong>
      </p>
      <p className="mb-2">
        Humidity: <strong id="air-humidity">{Math.round(props.data.Humidity)}% </strong>
      </p>
      <p>
        Feels like: <strong id="feels-like">{Math.round(props.data.FeelsLike)}°C</strong>
      </p>
      <p>
        Max: <strong id="high">{Math.round(props.data.MaxTemp)}°C</strong> , Min:{" "}
        <strong id="low"> {Math.round(props.data.MinTemp)}°C</strong>
      </p>
      <div className="d-flex flex-row align-items-center">
        <p className="mb-0 me-4 text-capitalize" id="weather-description">
          {props.data.Description}
        </p>
        <i className="fas fa-cloud fa-3x"></i>
      </div>
    </div>
  </div>
  </div>)
}