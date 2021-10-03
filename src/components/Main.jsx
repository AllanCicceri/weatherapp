import './Main.css'
import React from 'react'
import * as TiIcons from 'react-icons/ti'
import * as GiIcons from 'react-icons/gi'
import * as WiIcons from 'react-icons/wi'

export default ({selectedCity}) => {

    let city = {
        name: 'Select a City',
        country: 'NO',
        degress: '0',
        icon: '10d',
        pressure: '0',
        humidity: '0',
        speed: '0',
        time: '00:00',
        date: 'Sat Oct 01 2021',
        timezone: 1000,
    }

    if(selectedCity !== null){
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        city = {...selectedCity.city}
        const cityInfoToday = {...selectedCity.list[0]}
        
        city.degress = parseInt(cityInfoToday.main.temp - 273)
        city.icon = cityInfoToday.weather[0].icon
        city.pressure = cityInfoToday.main.pressure
        city.humidity = cityInfoToday.main.humidity
        city.speed = cityInfoToday.wind.speed

        let unixTimestamp = cityInfoToday.dt
        const date = new Date(unixTimestamp * 1000)
        const year = date.getFullYear()
        const month = months[date.getMonth()]
        const day = days[date.getDay()]
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const completeDate = `${hours}:${minutes} - ${day}, ${month} ${year}`
        city.date = completeDate

    }

    return (
        <div className="main">
            <div className="upperInfo">
                <div className="degrees">{city.degress}°C</div>
                <div className="cityTime">
                    <div className="city">{city.name} <span>,{city.country}</span> </div>
                    <div className="time">{city.date} - Clouds</div>
                </div>
                {/* <TiIcons.TiWeatherPartlySunny size="80px"/> */}
                <img src={`http://openweathermap.org/img/w/${city.icon}.png`} alt="weather icon today" style={{width:"60px", height:"60px"}}/>
            </div>

            <div className="bootomInfo">
                <div className="humidity">
                    <WiIcons.WiHumidity  size="40px"/> <br/>Humidity <br/> {city.humidity}
                </div>
                <div className="pressure">
                    <GiIcons.GiSpeedometer size="40px" /> <br/>Pressure <br/> {city.pressure}
                </div>
                <div className="speed">
                    <TiIcons.TiWeatherWindy  size="40px"/> <br/>Speed <br/> {city.speed}
                </div>
            </div>
        </div>
    )
}