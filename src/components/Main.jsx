import './Main.css'
import React from 'react'
import * as TiIcons from 'react-icons/ti'
import * as GiIcons from 'react-icons/gi'
import * as WiIcons from 'react-icons/wi'

const Main = ({selectedCity}) => {

    let city = {
        name: 'Select a City',
        country: 'NO',
        degress: '0',
        main: 'clear',
        icon: '10d',
        pressure: '0',
        humidity: '0',
        speed: '0',
        completeDate: 'Sat Oct 01 2021',
        timezone: 1000,
        sunset: '18:00',
    }

    if(selectedCity !== null){
        const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        const cityInfoToday = {...selectedCity.list[0]}
        city = {...selectedCity.city, ...cityInfoToday}
        
        city.degress = parseInt(cityInfoToday.main.temp - 273)
        city.main = cityInfoToday.weather[0].main
        city.icon = cityInfoToday.weather[0].icon
        city.pressure = cityInfoToday.main.pressure
        city.humidity = cityInfoToday.main.humidity
        city.speed = cityInfoToday.wind.speed

        const timezone = city.timezone
        const dateNow = new Date((new Date().getTime()) -timezone * 1000)
        city.completeDate = `${days[dateNow.getDay()]} ${months[dateNow.getMonth()]} ${dateNow.getUTCDate()}, ${dateNow.getFullYear()}  ${dateNow.getHours()}:${dateNow.getMinutes()}`
        const sunset = new Date(city.sunset * 1000)
        city.sunset = `${sunset.getHours()}:${sunset.getMinutes()}`
    }

    return (
        <div className="main">
            <div className="upperInfo">
                <div className="degrees">{city.degress}°<span>C</span></div>
                <div className="cityTime">
                    <div className={`city ${(city.name.length > 6)?(city.name.length > 12?'large':'medium'):''}`}> {city.name} <span>{city.country}</span> </div>
                    <div className="time">{city.completeDate} - {city.main}</div>
                </div>
                <img src={`http://openweathermap.org/img/w/${city.icon}.png`} alt="weather icon today" style={{width:"60px", height:"60px"}}/>
            </div>

            <div className="bootomInfo">
                <div className="sunset">
                    <WiIcons.WiSunset size="40px"/> <br/>Sunset <br/> <br/> {city.sunset}
                </div>
                <div className="humidity">
                    <WiIcons.WiHumidity  size="40px"/> <br/>Humidity <br/> <br/> {city.humidity}
                </div>
                <div className="pressure">
                    <GiIcons.GiSpeedometer size="40px" /> <br/>Pressure <br/> <br/> {city.pressure}
                </div>
                <div className="speed">
                    <TiIcons.TiWeatherWindy  size="40px"/> <br/>Speed <br/> <br/> {city.speed}
                </div>
            </div>
        </div>
    )
}

export default Main