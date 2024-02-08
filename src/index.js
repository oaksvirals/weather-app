import "./style.css";
import { weatherAutoIP, weatherLocation } from "./weatherAPI";

// Let's code!

let weatherIP = null;
let weatherLoc = null;

async function initWeatherData() {
  try {
    weatherIP = await weatherAutoIP();
  } catch {
    console.log("error with initWeatherData");
  }
}

initWeatherData();

async function initWeatherLocation(location) {
  try {
    weatherLoc = await weatherLocation(location);
  } catch {
    console.log("error with initWeatherLocation");
  }
}

initWeatherLocation("birmingham alabama");
