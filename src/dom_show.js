import {
  todayWeatherData,
  daysOfWeather,
  weatherDataManyDays,
} from "./toggle_api.js";
import { whichIcon } from "./icon_logic.js";
import { removeManyDays } from "./remove_dom.js";
import { getApiData } from "./toggle_api.js";

export function showToday() {
  let cityName = document.getElementById("city");
  let weather = document.getElementById("main_weather");
  let icon = document.getElementById("icon");
  let feelsLike = document.getElementById("feels_temp");
  let precip = document.getElementById("water");
  let feelsLow = document.getElementById("low");
  let feelsHigh = document.getElementById("high");
  let sunset = document.getElementById("sunset");

  cityName.textContent = todayWeatherData.address;
  weather.textContent = todayWeatherData.weather;
  feelsLike.textContent = todayWeatherData.feelLike;
  precip.textContent = todayWeatherData.precipation;
  feelsLow.textContent = todayWeatherData.feelLow;
  feelsHigh.textContent = todayWeatherData.feelHigh;
  sunset.textContent = todayWeatherData.sunset;
  icon.setAttribute("src", whichIcon(todayWeatherData.feelLike));
}

export function showManyDays(manydays) {
  for (let i = 0; i < manydays.length; i++) {
    createDay(
      manydays[i].actualHigh,
      manydays[i].actualLow,
      manydays[i].day,
      manydays[i].weather
    );
  }
}

function convertToMMDD(day) {
  const date = new Date(day);
  const MM = date.getMonth() + 1;
  const DD = date.getDate();
  const MMDD = MM + "/" + DD;
  return MMDD;
}
//long ass DOM creation function
function createDay(api_high, api_low, api_day, api_weather) {
  api_day = convertToMMDD(api_day);
  const day = createElement("day", false, "weather");
  const date = createElement("h2", api_day, "date");
  day.appendChild(date);
  const img = createElement("img", false, false);
  img.setAttribute("src", whichIcon((api_high + api_low) / 2));
  img.setAttribute("alt", "image of clothing");
  day.appendChild(img);
  const weather = createElement("h3", api_weather);
  day.appendChild(weather);

  const low_high = createElement("low_high");
  const low = createElement("low");
  low_high.appendChild(low);
  const low_text = createElement("p", "Low: ", "low_text");
  const low_api = createElement("p", api_low, "api_info low");
  low.appendChild(low_text);
  low.appendChild(low_api);

  const high = createElement("high");
  low_high.appendChild(high);
  const high_text = createElement("p", "High: ", "high_text");
  const high_api = createElement("p", api_high, "api_info high");
  high.appendChild(high_text);
  high.appendChild(high_api);

  day.appendChild(low_high);
  parent = document.querySelector("many_days");
  parent.appendChild(day);
}
function createElement(type, text = false, element_class, id) {
  const newElement = document.createElement(type);
  if (text) {
    newElement.textContent = text;
  }
  if (id) {
    newElement.setAttribute("id", id);
  }
  if (element_class) {
    newElement.setAttribute("class", element_class);
  }
  return newElement;
}

const rand = document.querySelector("#random");
rand.addEventListener("click", () => {
  getApiData("london");
  showToday();
  console.log("random button for show weather data");
  removeManyDays();
  showManyDays();
});
