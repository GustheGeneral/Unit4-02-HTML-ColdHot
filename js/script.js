function hotOrCold(temperature) {
  if (temperature < 15) {
    return "Cold";
  } else {
    return "Hot";
  }
}

function calculateTemperature() {
  let temperatureInput = document.getElementById("temperature").value;
  let temperature = parseFloat(temperatureInput);
  let resultElement = document.getElementById("result");

  if (!isNaN(temperature)) {
    let result = hotOrCold(temperature);
    resultElement.textContent = `The temperature is ${result}.`;
  } else {
    resultElement.textContent = "Please enter a valid number for temperature.";
  }
}
