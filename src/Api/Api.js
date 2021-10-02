const API_KEY = process.env.REACT_APP_API_KEY
let endPoint = "http://api.openweathermap.org/data/2.5/forecast?"


export const getWeather = async id => {
    if(id !== null && id !== ''){
        const apiReturn = await fetch(`${endPoint}id=${id}&appid=${API_KEY}`).then(resp => resp.json())
        return apiReturn
    }
}