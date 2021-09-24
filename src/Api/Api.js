const API_KEY = "65f898b5fd686db34dcb766049ab7a84"
let endPoint = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={65f898b5fd686db34dcb766049ab7a84}"

const getWeather = async endPoint => {
    const apiReturn = await fetch(endPoint)
    console.log(apiReturn)
}