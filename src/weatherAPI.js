export { weatherAutoIP, weatherLocation };

async function weatherAutoIP() {
  try {
    const getData = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=7110af8146e149ae9da190029240602&q=auto:ip&aqi=no",
      { mode: "cors" }
    );
    const currentData = await getData.json();

    console.log(currentData);
    return currentData;
  } catch {
    console.log("error with weatherAutoIP");
  }
}

async function weatherLocation(loc) {
  try {
    const getData = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=7110af8146e149ae9da190029240602&q=" +
        loc +
        "&aqi=no",
      { mode: "cors" }
    );
    const currentData = await getData.json();
    console.log(currentData);
    return currentData;
  } catch {
    console.log("error with weatherLocation");
  }
}
