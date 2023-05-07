import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    function Day(){
        let date = new Date(props.data.dt * 1000)
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day];
    }

    return (
        <div className="WeatherDailyForecast">
        <hr/>
        <div className="row">
        <div className="col">
           <div className="weather-forecast-day">
           {Day()}
           </div>
        <WeatherIcon code={props.data.weather[0].icon} size={30}/>
        <div className="weather-forecast-temp">
            <span className="weather-forecast-max">{Math.round(props.data.temp.max)}°</span>
            <span className="weather-forecast-min">{Math.round(props.data.temp.min)}°</span>
        </div>
        </div>
        </div>
    </div>
    )
}