import { getApiData } from "./toggle_api.js";
import { showToday,showManyDays } from "./dom_show.js";
import { todayWeatherData,weatherDataManyDays } from "./toggle_api.js";
import { removeManyDays } from "./remove_dom.js";

const searchbar = document.querySelector("#location");
const submit_button = document.getElementById("submit_location");
export let location = "";
export function clickingSubmitValue() {
  submit_button.addEventListener("click", () => {
    location = searchbar.value;
    waitForAPI(location);
  });
}
async function waitForAPI(location) {
  await getApiData(location);
  console.log("search bar is clicked and the object is");
  showToday();
    removeManyDays();
    console.log('weather dat many')
    console.log(weatherDataManyDays)
    showManyDays(weatherDataManyDays)
}
