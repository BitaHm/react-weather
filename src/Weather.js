import React, { useState } from "react";
import "./Style.css";
import './mdb.min.css';
import Video from "./Video"
import axios from "axios"

import WeatherInfo from "./WeatherInfo";

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
      DateTime : new Date(response.data.dt * 1000),
      iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252035.png"
    })

   }


  if(weatherData.ready){  return (

    <div className="container">

      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <h3 className="mb-4 pb-2 fw-normal title">
              Check the Weather Forecast
            </h3>

            <div className="button-container input-group rounded mb-3">
              <from className="searchForm">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search for a City..."
                aria-label="Search"
                aria-describedby="search-addon"
                id="search-field"
              />
              <input value={"Search"} className="btn btn-primary form-control rounded" id="searchButton" type="submit" href="#!"/>
              </from>
            </div>
            <WeatherInfo data={weatherData}/>
          
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