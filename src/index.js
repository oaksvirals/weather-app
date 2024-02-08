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
  windMPH;

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
    visKM = activeLocation.current.visKM;
    visMiles = activeLocation.current.visMiles;
    windKPH = activeLocation.current.wind_kph;
    windMPH = activeLocation.current.wind_mph;
    country = activeLocation.location.country;
    name = activeLocation.location.name;
    region = activeLocation.location.region;
  } catch {
    console.log("error with initWeatherData");
  }
}

initWeatherData();

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
    visKM = activeLocation.current.visKM;
    visMiles = activeLocation.current.visMiles;
    windKPH = activeLocation.current.wind_kph;
    windMPH = activeLocation.current.wind_mph;
    country = activeLocation.location.country;
    name = activeLocation.location.name;
    region = activeLocation.location.region;

    country = activeLocation.location.country;
    name = activeLocation.location.name;
    region = activeLocation.location.region;
  } catch {
    console.log("error with initWeatherLocation");
  }
}

const search = document.querySelector("input");
const button = document.querySelector("button");

function searchWeather() {
  initWeatherLocation(search.value);
  search.value = "";
}

button.addEventListener("click", searchWeather);

// initWeatherLocation("birmingham");
