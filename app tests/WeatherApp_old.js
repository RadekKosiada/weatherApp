/* 
      <h2 id="intro">Radek's Weather App</h2>
      <p id="location">Berlin, DE</p>
      <p id="temp">Temp: 15° C </p>
      <p id="sky">Clouds</p>
      <p id="windSpeed"> Wind speed: 3,6 m/s</p>
      <p id="windStrenght">Light Breeze</p>
      <p id="pressure"> Pressure: 1011</p>
      <p id="sun">Sunrise: 07:56 Sunset: 18:45</p>
      <p id="mood">Mood :|</p>
       */

// https://en.wikipedia.org/wiki/Beaufort_scale
// location
// https://forum.freecodecamp.org/t/sunrise-and-sunset-calculations-for-api-weather-machine/151949/2
// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript 

// example of another app https://codepen.io/Bumble3Bee/pen/XaLvqY 

// API key 68c2f29a956ecd67447dbce69f9b954b
// API call http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=68c2f29a956ecd67447dbce69f9b954b

// var weatherObj = {
//       "coord":{
//             "lon":139,
//             "lat":35},
//       "weather":[{
//             "id":800,
//             "main":"Clear",
//             "description":"clear sky",
//             "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F01n.png?1499366020783"
//             }],
//       "base":
//             "stations",
//       "main":{
//             "temp":19.22,
//             "pressure":1021.53,
//             "humidity":93,
//             "temp_min":19.22,
//             "temp_max":19.22,
//             "sea_level":1030.84,
//             "grnd_level":1021.53},
//       "wind":{
//             "speed":8.27,
//              "deg":244.001},
//       "clouds":{
//             "all":0},
//       "dt":1522757191,
//       "sys":{
//             "message":0.0039,
//             "country":"JP",
//             "sunrise":1522700891,
//             "sunset":1522746410},
//       "id":1851632,
//       "name":
//             "Shuzenji",
//             "cod":200}


// var cityCountry =weatherObj.name + ', ' + weatherObj.sys.country;
// var temp = 'Temperature: ' + weatherObj.main.temp;
// var sky = weatherObj.weather[0].main;
// var icon = weatherObj.weather[0].icon;
// var windSpeed = 'Wind speed: ' + weatherObj.wind.speed + ' m/s';
// var windStrenght = ''; //to be added later, check wikipedia link
// var pressure = 'Pressure: ' + weatherObj.main.pressure + ' mbar';
// var sunrise = 'Sunrise: ' + weatherObj.sys.sunrise;
// var sunset = 'Sunset: ' + weatherObj.sys.sunset;
// var mood; //coming later;
// // console.log (sunrise);

function loadWeather (weatherObj){

document.querySelector("#location").innerHTML = weatherObj.name + ', ' + weatherObj.sys.country;
document.querySelector("#temp").innerHTML= temp;
document.querySelector("#sky").innerHTML = sky;
// document. ICON
document.querySelector("#windSpeed").innerHTML= windSpeed;
// document.querySelector("#windStrenght").innerHTML= windStrenght;
document.querySelector("#pressure").innerHTML = pressure;
document.querySelector("#sunrise").innerHTML = sunrise;
document.querySelector("#sunset").innerHTML=sunset;
// document.querySelector("#mood").innerHTML=mood;
};

function getWeather() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loadWeather(this.responseText);
            }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
      console.log(url);
    };



var url;
var latitude;
var longitude;

// function getLocation() {
//       if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(showPosition);          
//       } else {
//             document.querySelector("#location").innerHTML = "Geolocation is not supported by this browser.";
//       }
//   };
  
//   function showPosition(position) {
//       latitude = Math.floor(position.coords.latitude); 
//       longitude = Math.floor(position.coords.longitude);
//       url = 'http://fcc-weather-api.glitch.me/api/current?lat='+ latitude + '&lon=' + longitude;
//       getWeather();
//       console.log(url);
//   };
  
//  console.log(getLocation());

//   navigator.geolocation.getCurrentPosition(function(location) {
//       console.log(location.coords.latitude);
//       console.log(location.coords.longitude);
//       console.log(location.coords.accuracy);
//     });


// document.querySelector("body").addEventListener("load", getLocation);

