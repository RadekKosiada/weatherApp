var googleKey = "AIzaSyABPZwLr425U91uRdnlIJejGH_za1BEm9g";

function loadLocation () {
    // document.querySelector("#location").innerHTML = "<span style='font-weight:bold'>" + appCity + '</span>';
    // document.querySelector("#myText").style = "display: none";
    // document.querySelector("#cityButton").style = "display: none";
    // document.querySelector("#weatherButton").style ="visibility: visible !important";

};

var weatherKey = "68c2f29a956ecd67447dbce69f9b954b";
var weatherUrl;

function getWeatherUrl() {
// weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" +  appLat + "&lon=" + appLon + "&units=metric&APPID="+ weatherKey;

weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + appCity + "&units=metric&APPID="+weatherKey;

getWeather();
};

function loadWeather (){
document.querySelector("#temp").innerHTML= "<span style='font-weight:bold'>Temp:</span> " + appTemp + "°C";
// document.querySelector("#sky").innerHTML = appSky;
document.querySelector("#description").innerHTML =appSkyDescription;
document.querySelector("#icon").innerHTML="<img src=" + webIcon + ">";
document.querySelector("#windSpeed").innerHTML= "<span style='font-weight:bold'>Wind:</span> " + appWindSpeed + " m/s";
document.querySelector("#windStrenght").innerHTML= appWindStrenght;
document.querySelector("#pressure").innerHTML = "<span style='font-weight:bold'>Pressure:</span> " + appPressure + " hpa";
document.querySelector("#humidity").innerHTML= "<span style='font-weight:bold'>Humidity:</span> " + appHumidity + " %";
// document.querySelector("#sunrise").innerHTML = "Sunrise: " + appSunrise;
// document.querySelector("#sunset").innerHTML="Sunset: " +appSunset;
document.querySelector("#mood").innerHTML=appMood;
document.querySelector("#switchButton").innerHTML= "switch to °F"

};

var appCity;
var appCountry;
var appCountryCode;
// var appLat;
// var appLon;
// var appRegion;
// var appRegionName;
// var appTimeZone;

var appTemp;
var appSky;
var appSkyDescription;
var appIcon;
var webIcon;
var appId;
var appWindSpeed;
var appPressure;
var appHumidity;
var appMood;

// getting the city from the input and declaring it as var appCity that is part of the url, needed for ajax call from openweathermap.org.
function myFunction() {
    var x = document.getElementById("myText").value;
    appCity = x;
    loadLocation();

}

//  weather icons
var sun = "./icons/Sun5.png";
var SunCloud = "./icons/SunCloud2.png";
var cloud = "./icons/Cloud.png";
var SunCloudRain = "./icons/SunCloudRain2.png";
var darkCloud = "./icons/DarkCloud.png";
var rain = "./icons/CloudRaindrop.png";
var flash ="./icons/Flash.png";
var snow = "./icons/Snow.png";
var mist = "./icons/Mist3.png";
var moon = "./icons/moon.png";
var moonCloud = "./icons/moonCloud.png";
var moonCloudRain = "./icons/moonCloudRain.png";


function getWeather() {
  $.ajax({
  url: weatherUrl,
  type: 'GET',
  success: function(weatherJson){
    appTemp  = weatherJson.main.temp;
    appSky = weatherJson.weather[0].main;
    appSkyDescription = weatherJson.weather[0].description;
    appIcon = weatherJson.weather[0].icon;
    appWindSpeed = weatherJson.wind.speed;
    appPressure = weatherJson.main.pressure;
    appHumidity =weatherJson.main.humidity;

//   changing of the weather icon
    if (appIcon == "01d") {
        webIcon = sun;
    } else if (appIcon== "02d") {
        webIcon = SunCloud;
    } else if (appIcon =="03d" || appIcon=="03n") {
        webIcon = cloud;
    } else if (appIcon == "04d" ||appIcon=="04n") {
        webIcon = darkCloud;
    } else if (appIcon == "09d" ||appIcon=="09n") {
        webIcon = rain;
    } else if (appIcon == "10d") {
        webIcon = SunCloudRain;
    } else if (appIcon == "11d" ||appIcon=="11n") {
        webIcon = flash;
    } else if (appIcon == "13d" ||appIcon=="13n") {
        webIcon = snown;
    } else if (appIcon == "50d" ||appIcon=="50n") {
        webIcon = mist;
    } else if (appIcon == "01n") {
        webIcon = moon;
    } else if (appIcon == "02n") {
        webIcon = moonCloud;
    } else if (appIcon =="10n") {
        webIcon = moonCloudRain;
    }

    // additional comment regarding the wind strenght
    if (appWindSpeed < 0.3) {
        appWindStrenght = "Very calm."
    }else if (appWindSpeed >=0.3 && appWindSpeed < 7.9){
        appWindStrenght = "Gentle breeze.";
    } else if (appWindSpeed >= 7.9 && appWindSpeed < 13.8) {
        appWindStrenght = "Strong breeze.";
    } else if (appWindSpeed >= 13.8 && appWindSpeed < 20.7) {
        appWindStrenght = "Stronger wind.";
    } else if (appWindSpeed >= 20.7 && appWindSpeed <24.4) {
        appWindStrenght = "Strong gale.";
    }else if (appWindSpeed >= 24.4 && appWindSpeed < 28.4) {
        appWindStrenght = "Storm!";
    } else if (appWindSpeed >=28.4 && appWindSpeed < 32.6) {
        appWindStrenght = "Violent storm!";
    } else if (appWindSpeed >= 32.6) {
        appWindStrenght = "Hurricane!";
    }

    // addtional info regarding the termal comfort
    if (appHumidity < 20) {
        appMood = "<span style='color:red'>Warning: dry air!</span>";
    // } else if (appHumidity >=20 && appHumidity < 60 && appTemp > 15 && appTemp < 25 && appSkyDescription == "clear sky" && appWindStrenght < 13.8) {
    //     appMood = "It feels nice outside!";
    // } else if (appHumidity >=20 && appHumidity < 60 && appTemp >= 25 && appWindStrenght < 13.8 && appSkyDescription == "clear sky") {
    //     appMood = "It feels great outside!";
    } else if (appHumidity >=20 && appHumidity < 60 && appTemp > 5 && appTemp <= 15 && appSkyDescription == "clear sky" && appWindStrenght < 13.8) {
        appMood = "It's a bit chilly, but the air feels good!";
    } else if (appTemp > 5 && appTemp< 15 && appWindStrenght > 24.4) {
        appMood = "<span style='color:red'>Warning: it's chilly and windy. The real feel temperature might be lower.</span>";
    } else if (appTemp < 5 && appHumidity > 60) {
        appMood = "<span style='color:red'>Warning: cold and humid! The real feel temperature will be even lower!</span>";
    } else if (appTemp >5 && appTemp < 15 && appHumidity > 60) {
        appMood = "Chilly and humid. Lower termal comfort.";
    } else if (appTemp > 25 && appHumidity > 60) {
        appMood = "<span style='color:red'>Heat warning; possible tiredness and problems with concetration.</span>"
    }else if (appTemp <= 25 && appTemp > 20 && appHumidity > 60) {
        appMood = "It's warm and humid; lower termal comfort."
    }else if (appTemp < 5 && appHumidity <60 && appSkyDescription == "few clouds") {
        appMood = "It's cold and a bit cloudy, but the sun should be there in a second!"
    } else if (appTemp < 5 && appHumidity <60 && appSkyDescription == "clear sky") {
        appMood = "It's cold, but the sun should feel nice!";
    }else if (appSkyDescription == "scattered clouds" || appSkyDescription == "broken clouds") {
            appMood = "It's cloudy outside.";
    }else if (appSkyDescription == "shower rain" || appSkyDescription == "rain") {
            appMood = "Take an umbrella!";
    } else if (appSkyDescription == "thunderstorm") {
            appMood = "It's a stormy weather. Maybe you'd better stay home?";
    }else if (appSkyDescription == "snow") {
            appMood = "Snow!";
    } else if (appSkyDescription == "mist") {
            appMood ="It's misty. Your visibility might be limited.";
    } else if(appSkyDescription =="clear sky" && appTemp <25 && appTemp >15 && appHumidity > 20 && appHumidity < 65 && appWindSpeed < 13.8) {
            appMood = "It feels nice outside!";
    } else if (appSkyDescription =="clear sky" && appTemp >= 25 && appHumidity > 20 && appHumidity < 65 && appWindSpeed < 13.8) {
        appMood = "It feels great outside!";
    } else {
        appMood = "";
    }

    loadWeather();


    // Switching °C to °F Math.round(value * 100) / 100
    var clickControl =true;
    function getFahrenheit(){
        if (clickControl) {
        document.querySelector("#temp").innerHTML= "<span style='font-weight:bold'>Temp:</span> " + Math.round((appTemp * 9/5 +32)* 100) / 100 + "°F";
        document.querySelector("#switchButton").innerHTML = "switch to °C";
        clickControl = !clickControl;
        } else {
        document.querySelector("#temp").innerHTML= "<span style='font-weight:bold'>Temp:</span> " + appTemp + "°C";
        document.querySelector("#switchButton").innerHTML = "switch to °F";
        clickControl = !clickControl;
        }
    };

document.querySelector("#switchButton").addEventListener("click", getFahrenheit);

  },
  error: function (err2) {
      console.log("Second ajax request failed, error = " + err2);
    if(confirm("Are you sure that's the correct name of city? Please try again.")){
    window.location.reload();
    }
  }
})

};

// Read more part
var addInfo = '<div>A project made as a part of the <a target="_blank" href="https://www.freecodecamp.org/challenges/show-the-local-weather">freeCodeCamp</a> curriculum. </div>'

var objectives = '<h5>Objectives:</h5>\
            <li>Use Javascript or jQuery;</li>\
            <li>Use an API to get the current weather conditions in my current location;</li>\
            <li>Use my own personal graphics style;</li>\
            <li>Show different icon or background image depending on the weather;</li>\
            <li>Add a button to toggle between Fahrenheit and Celsius.</li>'

var recommends = '<h5>Recommendation from fCC:</h5>\
            <li>Use HTML5 Geolocation;</li>\
            <li>Use freeCodeCamp <a target="_blank" href="https://fcc-weather-api.glitch.me">Weather API.</a></li>'

var addInput = '<h5>My additional input:</h5>\
            <li>Another weather API due to issues with fCC API;</li>\
            <li>Submit form - to extend search options beyond user\'s current location;</li>\
            <li>Google autocomplete - to simplify entering location and avoid typos;</li>\
            <li>Wind strength based on the <a target="_blank"  href="https://en.wikipedia.org/wiki/Beaufort_scale">Beaufort scale;</a></li>\
            <li>Additional message at the bottom for <span style="font-weight: bold">most</span> of the weather conditions;</li>\
            <li>The background and all icons have been designed and drawn by myself.</li>'

 var marginLeft = "margin-left: 20%";

var lessInfo = false;
function readMore () {
    if(lessInfo) {
        document.querySelector("#moreInfo").innerHTML="Read more ...";
        document.querySelector("#additionalInfo").innerHTML = "";
        document.querySelector("#objectives").innerHTML= "";
        document.querySelector("#recommends").innerHTML="";
        document.querySelector("#addInput").innerHTML ="";
        lessInfo= !lessInfo;
    } else {
        document.querySelector("#moreInfo").innerHTML="Read less";
        document.querySelector("#additionalInfo").innerHTML = addInfo;
        document.querySelector("#additionalInfo").style =marginLeft;
        document.querySelector("#objectives").innerHTML= objectives;
        document.querySelector("#objectives").style =marginLeft;
        document.querySelector("#recommends").innerHTML=recommends;
        document.querySelector("#recommends").style =marginLeft;
        document.querySelector("#addInput").innerHTML =addInput;
        document.querySelector("#addInput").style =marginLeft;
        lessInfo= !lessInfo;
    }
};

document.querySelector("#moreInfo").addEventListener("click", readMore);

// Google Place Autocomplete

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13
    });
    var input = /** @type {!HTMLInputElement} */(
        document.getElementById('myText'));

    var types = document.getElementById('type-selector');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();


    });

  }
