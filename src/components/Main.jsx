import './Main.css'
import React from 'react'
import * as TiIcons from 'react-icons/ti'
import * as GiIcons from 'react-icons/gi'
import * as WiIcons from 'react-icons/wi'

export default () => {
    return (
        <div className="main">
            <div className="upperInfo">
                <div className="degrees">10°c</div>
                <div className="cityTime">
                    <div className="city">Lajeado <span>,BR</span> </div>
                    <div className="time">15:00 - Seg, 23 Set 2021 - Clouds</div>
                </div>
                <TiIcons.TiWeatherPartlySunny size="80px"/>
            </div>

            <div className="bootomInfo">
                <div className="daytime">
                    <TiIcons.TiWeatherSunny size="40px"/> <br/>Sunset <br/> 16:44
                </div>
                <div className="humidity">
                    <WiIcons.WiHumidity  size="40px"/> <br/>Humidity <br/> 76
                </div>
                <div className="pressure">
                    <GiIcons.GiSpeedometer size="40px" /> <br/>Pressure <br/> 1002
                </div>
                <div className="speed">
                    <TiIcons.TiWeatherWindy  size="40px"/> <br/>Speed <br/> 3.4
                </div>
            </div>
        </div>
    )
}