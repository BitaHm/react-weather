import React from "react";
import "./Style.css";
import './mdb.min.css';
import Video from "./Video"

export default function Weather() {
  return (
    
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
            <div className="mb-4 ">
              <div className="form-check form-check-inline">
                <button type="button" className="btn btn-secondary active1" id="celecius">
                  To Celsius
                </button>
              </div>

              <div className="form-check form-check-inline">
                <button type="button" className="btn btn-secondary active2" id="faranhait">
                  To Farenheit
                </button>
              </div>
            </div>

            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-6">
                    <h4 className="mb-1 sfw-normal">New York</h4>

                    <p className="mb-2" id="dayTime">
                      Time: <strong>12:00</strong>
                    </p>
                  </div>
                  <div className="col-6">
                    <img id="current-icon" src="" alt="" />
                  </div>
                </div>

                <p className="mb-2">
                  Current temperature: <strong id="current-temp">5.42°C</strong>
                </p>
                <p className="mb-2">
                  Wind Speed: <strong id="wind-speed">4 km/hr </strong>
                </p>
                <p className="mb-2">
                  Humidity: <strong id="air-humidity">90% </strong>
                </p>
                <p>
                  Feels like: <strong id="feels-like">4.37°C</strong>
                </p>
                <p>
                  Max: <strong id="high">6.11°C</strong> , Min:{" "}
                  <strong id="low"> 3.89°C</strong>
                </p>
                <div className="d-flex flex-row align-items-center">
                  <p className="mb-0 me-4" id="weather-description">
                    Scattered Clouds
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
  );
}