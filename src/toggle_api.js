import { api } from "./api_key.js"
import { convertToAMPM } from "./helper.js"
export let weatherDataManyDays = []
export let todayWeatherData = {}
let cityName =""
const toggle_api_button = document.getElementById("toggle_api")
const test = document.getElementById("random")

export function toggleKey () {
        toggle_api_button.addEventListener("click", ()=> {
        getApiData()
   })
}
function checkAPI(message) {
    console.log(message)
}
export async function getApiData(location="ann%20arbor") {
    reset()
    api.link="no change"
    api.link="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"/"+todayDate().yyyymmdd+"/"+nextDays().yyyymmdd+"/"+"?key=WXRK457BK28XNWR775XCD4JY8"
    const response = await fetch(api.link, {mode: 'cors'})
    const weatherData = await response.json()
    console.log("get api data function console")
    console.log(weatherData)
    cityName = weatherData.address
    daysOfWeather(weatherData)
    todayWeather(weatherData)
}
function todayDate() {
        const millDate = new Date()
        const year = millDate.getFullYear()
        const month = millDate.getMonth() + 1
        const day = millDate.getDate()
        const yyyymmdd = year +"-"+ month+"-" + day
    return {yyyymmdd}
}
function nextDays() {
    const cDate = new Date()
    cDate.setDate(cDate.getDate() + 3)
    const year = cDate.getFullYear()
    const month = cDate.getMonth() + 1
    const day = cDate.getDate()
    const yyyymmdd = year +"-"+ month+"-" + day
return {yyyymmdd}
}
console.log(nextDays())
function reset() {
    weatherDataManyDays = []
}
export function daysOfWeather(weatherData){
    for (let i=1; i<4; i++) {
        let arr = {
            day: weatherData.days[i].datetime,
            weather: weatherData.days[i].conditions,
            actualLow:weatherData.days[i].tempmin,
            actualHigh:weatherData.days[i].tempmax
        }
        weatherDataManyDays.push(arr)
    }
    console.log(weatherDataManyDays)
}
export function todayWeather(weatherData) {
    todayWeatherData = {
        day: weatherData.days[0].datetime,
        weather: weatherData.days[0].conditions,
        feelLike:weatherData.days[0].feelslike,
        feelLow:weatherData.days[0].feelslikemin,
        feelHigh: weatherData.days[0].feelslikemax,
        precipation: weatherData.days[0].precipprob,
        sunset:convertToAMPM(weatherData.days[0].sunset),
        address: weatherData.address
    }
    console.log("todayweatehr function ")
    console.log(todayWeatherData)

}
