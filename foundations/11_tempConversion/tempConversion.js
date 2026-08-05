const convertToCelsius = function(temp) {
  let celcius = (temp-32) * (5/9);
  let celciusRounded = Math.round(celcius * 10) / 10;
  return celciusRounded;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * (9/5)) + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
