import "./style.css";
import { weatherAutoIP, weatherLocation } from "./weatherAPI";

// Data needed from API:
// current.condition. icon/text
// current. temp_c/temp_f/feelslike_c/feelslike_f
// location. country/name/region

let weatherIP = null;
let weatherLoc = null;
let activeLocation = null;

let tempC, tempF, feelsC, feelsF, country, name, region;
let gustKPH,
  gustMPH,
  humidity,
  precipIN,
  precipMM,
  pressureIN,
  pressureMB,
  uv,
  visKM,
  visMiles,
  windKPH,
  windMPH,
  weatherIcon,
  conditionText;

async function initWeatherData() {
  try {
    weatherIP = await weatherAutoIP();
    console.log(weatherIP);
    activeLocation = weatherIP;
    tempC = activeLocation.current.temp_c;
    tempF = activeLocation.current.temp_f;
    feelsC = activeLocation.current.feelslike_c;
    feelsF = activeLocation.current.feelslike_f;
    gustKPH = activeLocation.current.gust_kph;
    gustMPH = activeLocation.current.gust_mph;
    humidity = activeLocation.current.humidity;
    precipIN = activeLocation.current.precip_in;
    precipMM = activeLocation.current.precip_mm;
    pressureIN = activeLocation.current.pressure_in;
    pressureMB = activeLocation.current.pressure_mb;
    uv = activeLocation.current.uv;
    visKM = activeLocation.current.vis_km;
    visMiles = activeLocation.current.vis_miles;
    windKPH = activeLocation.current.wind_kph;
    windMPH = activeLocation.current.wind_mph;
    country = activeLocation.location.country;
    name = activeLocation.location.name;
    region = activeLocation.location.region;
    weatherIcon = activeLocation.current.condition.icon;
    conditionText = activeLocation.current.condition.text;
  } catch {
    console.log("error with initWeatherData");
  }
}

(async function onLoad() {
  await initWeatherData();
  tempActual.textContent = tempF + "°F";
  tempFeelsLike.textContent = feelsF + "°F";
  percipitation.textContent = precipIN + " in";
  humid.textContent = humidity;
  pressure.textContent = pressureIN + " in";
  visibility.textContent = visMiles + " mi";
  wind.textContent = windMPH + " mph";
  uvIndex.textContent = uv;

  headingCountry.textContent = country;
  headingLocation.textContent = name + ", " + region;

  weatherImage.style.backgroundImage = `url(${weatherIcon})`;
  conditionTxt.textContent = conditionText;
})();

// initWeatherData();

async function initWeatherLocation(location) {
  try {
    weatherLoc = await weatherLocation(location);
    console.log(weatherLoc);
    activeLocation = weatherLoc;
    tempC = activeLocation.current.temp_c;
    tempF = activeLocation.current.temp_f;
    feelsC = activeLocation.current.feelslike_c;
    feelsF = activeLocation.current.feelslike_f;
    gustKPH = activeLocation.current.gust_kph;
    gustMPH = activeLocation.current.gust_mph;
    humidity = activeLocation.current.humidity;
    precipIN = activeLocation.current.precip_in;
    precipMM = activeLocation.current.precip_mm;
    pressureIN = activeLocation.current.pressure_in;
    pressureMB = activeLocation.current.pressure_mb;
    uv = activeLocation.current.uv;
    visKM = activeLocation.current.vis_km;
    visMiles = activeLocation.current.vis_miles;
    windKPH = activeLocation.current.wind_kph;
    windMPH = activeLocation.current.wind_mph;
    country = activeLocation.location.country;
    name = activeLocation.location.name;
    region = activeLocation.location.region;
    weatherIcon = activeLocation.current.condition.icon;
    conditionText = activeLocation.current.condition.text;
  } catch {
    console.log("error with initWeatherLocation");
  }
}

const tempActual = document.querySelector("#temp-actual");
const tempFeelsLike = document.querySelector("#temp-feelslike");
const percipitation = document.querySelector("#percipitation");
const humid = document.querySelector("#humidity");
const pressure = document.querySelector("#pressure");
const visibility = document.querySelector("#visibility");
const wind = document.querySelector("#wind");
const uvIndex = document.querySelector("#uv");

// const headingName = document.querySelector("#name");
// const headingRegion = document.querySelector("#region");
const headingCountry = document.querySelector("#country");
const headingLocation = document.querySelector("#location");

const weatherImage = document.querySelector("#weatherImg");
const conditionTxt = document.querySelector("#conditionText");

const search = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");

async function searchWeather() {
  await initWeatherLocation(search.value);
  search.value = "";
  tempActual.textContent = tempF + "°F";
  tempFeelsLike.textContent = feelsF + "°F";
  percipitation.textContent = precipIN + " in";
  humid.textContent = humidity;
  pressure.textContent = pressureIN + " in";
  visibility.textContent = visMiles + " mi";
  wind.textContent = windMPH + " mph";
  uvIndex.textContent = uv;

  headingCountry.textContent = country;
  headingLocation.textContent = name + ", " + region;

  weatherImage.style.backgroundImage = `url(${weatherIcon})`;
  conditionTxt.textContent = conditionText;
}

searchBtn.addEventListener("click", searchWeather);

const fButton = document.querySelector("#F");
const cButton = document.querySelector("#C");

function activateF() {
  fButton.classList.add("activeBtn");
  cButton.classList.remove("activeBtn");
  tempActual.textContent = tempF + "°F";
  tempFeelsLike.textContent = feelsF + "°F";
  percipitation.textContent = precipIN + " in";
  pressure.textContent = pressureIN + " in";
  visibility.textContent = visMiles + " mi";
  wind.textContent = windMPH + " mph";
}

function activateC() {
  cButton.classList.add("activeBtn");
  fButton.classList.remove("activeBtn");
  tempActual.textContent = tempC + "°C";
  tempFeelsLike.textContent = feelsC + "°C";
  percipitation.textContent = precipMM + " mm";
  pressure.textContent = pressureMB + " mb";
  visibility.textContent = visKM + " km";
  wind.textContent = windKPH + " kph";
}

fButton.addEventListener("click", activateF);
cButton.addEventListener("click", activateC);
