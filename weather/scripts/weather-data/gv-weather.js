var request = new XMLHttpRequest();
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=29601,us&appid=71b5981cd66ccd672d616232a4abac67&units=imperial', true);
request.send();

request.onload = function() {
  var weatherInfo = JSON.parse(request.responseText);
  getWeather(weatherInfo);
  console.log(weatherInfo);
}

function getWeather(weatherInfo) {
    var high = weatherInfo.main.temp_max;
    var low = weatherInfo.main.temp_min;
    var currentTemp = weatherInfo.main.temp;
    var windSpeed = weatherInfo.wind.speed;
    var condition = weatherInfo.weather[0].description
    
    document.getElementById("high").innerHTML = high;
    document.getElementById("low").innerHTML = low;
    document.getElementById("temp").innerHTML = currentTemp;
    document.getElementById("speed").innerHTML = windSpeed;
    document.getElementById("condition").innerHTML = condition;
}
