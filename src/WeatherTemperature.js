import React, { useState } from "react";


export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");
function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahreheit");
}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

function fahreheit (){
    return(props.celsius * 9) /5 + 32;
}

    if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahreheit())}</span>
        <span className="unit">
                °F | {""} 
            <a href="/" onClick={showFahrenheit}> 
                °C
             </a>
        </span>
      </div>
    );
} else {
    return (
        <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
                °C | {""} 
                <a href="/" onClick={showCelsius}> 
                °F
                </a> 
                
        </span>
      </div>
    );
}
  

}
