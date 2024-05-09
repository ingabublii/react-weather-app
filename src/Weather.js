import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            date: new Date(response.data.dt *1000),
            icon: "https://openweathermap.org/img/wn/@2x.png",
            description:response.data.weather[0].description

        });
       
    }
    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9"><input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/></div>
                    <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" /></div>
                </div>
                
            </form>
            <h1>{weatherData.city}</h1>
                <ul>
                <li><FormattedDate date = {weatherData.date} /></li>
                    
                <li className="text-capitalize">{weatherData.description}</li>
                
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                
                    <img src={weatherData.icon} alt={weatherData.description} />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation:0%</li>
                        <li>Himidity:{weatherData.humidity}%</li>
                        <li>Wind:{weatherData.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
   
    } else {
        let apiKey = "5863935ee9cca4c02ed68203f807c65b";
        let units = "metric";
        let city = "Kyiv";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse)
    }
    return "Loading...";
}