import React, { useState } from "react";

export default function Conversions(props){

    const [unit, setUnit] = useState("celsius")

    function ShowF(event) {
        event.preventDefault()
        setUnit("fahrenheit");
      }


    function ShowC(event) {
        event.preventDefault()
        setUnit("celsius");
    }

    let fahrenheit = (props.celsius * 9 / 5) +32;

    if (unit === "celsius"){
        return(
            <div className="conversions">
                 <div className="WeatherTemperature">
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">°C |</span> <a onClick={ShowF} href="/">°F</a>
        </div>
            </div>
            )
    } else{
        return(
            <div className="conversions">
                 <div className="WeatherTemperature">
          <span className="temperature">{Math.round(fahrenheit)}</span>
          <span className="unit"><a onClick={ShowC} href="/">°C</a> |</span> °F
        </div>
            </div>
            )
    }
    
}