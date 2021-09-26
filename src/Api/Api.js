const API_KEY = "65f898b5fd686db34dcb766049ab7a84"
let endPoint = "http://api.openweathermap.org/data/2.5/forecast?"


export const getWeather = async id => {
    if(id !== null && id !== ''){
        const apiReturn = await fetch(`${endPoint}id=${id}&appid=${API_KEY}`).then(resp => resp.json())
        return apiReturn
    }
}