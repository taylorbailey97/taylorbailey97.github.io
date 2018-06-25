var request = new XMLHttpRequest();
request.open('GET', 'api.openweathermap.org/data/2.5/forecast?zip=55333,us&appid=71b5981cd66ccd672d616232a4abac67', true);
request.send();

request.onload = function(){
  var weather5Day = JSON.parse(request.responseText);
  /*get5Day(weather5Day);*/
  console.log(weather5Day);
}