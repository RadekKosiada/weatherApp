// const apiObject = require('./apiKey.js');
// const weatherKey = apiObject.weatherKey;

// const {weatherKey} = require("./apiKey.js")
function loadLocation () {
    document.querySelector("#location").innerHTML = "<span style='font-weight:bold'>" + appCity + '</span>';
    // document.querySelector("#myText").style = "display: none";
    // document.querySelector("#cityButton").style = "display: none";
    // document.querySelector("#weatherButton").style ="visibility: visible !important";
    document.querySelector("#switchButton").innerHTML= "switch to °F"
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
// document.querySelector("#icon").innerHTML="<img src='https://my-spoiler-alert.com/radek/Mist3.png'>";
document.querySelector("#windSpeed").innerHTML= "<span style='font-weight:bold'>Wind:</span> " + appWindSpeed + " m/s";
document.querySelector("#windStrenght").innerHTML= appWindStrenght;
document.querySelector("#pressure").innerHTML = "<span style='font-weight:bold'>Press:</span> " + appPressure + " hpa";
document.querySelector("#humidity").innerHTML= "<span style='font-weight:bold'>Humidity:</span> " + appHumidity + " %";
// document.querySelector("#sunrise").innerHTML = "Sunrise: " + appSunrise;
// document.querySelector("#sunset").innerHTML="Sunset: " +appSunset;
document.querySelector("#mood").innerHTML=appMood;
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
// var appSunrise;
// var appSunset;
var appMood;


function myFunction() {
    var x = document.getElementById("myText").value;
    appCity = x;
    loadLocation();

    // var input = document.getElementById("myText");
    // input.addEventListener("keyup", function(event) {
    //     event.preventDefault();
    //     if (event.keyCode === 13) {
    //         document.getElementById("cityButton").click();
    //     }
    // });
};
 
var sun = "https://my-spoiler-alert.com/radek/Sun5.png";
var SunCloud = "https://my-spoiler-alert.com/radek/SunCloud2.png";
var cloud = "https://my-spoiler-alert.com/radek/Cloud.png";
var SunCloudRain = "https://my-spoiler-alert.com/radek/SunCloudRain2.png";
var darkCloud = "https://my-spoiler-alert.com/radek/DarkCloud.png";
var rain = "https://my-spoiler-alert.com/radek/CloudRaindrop.png";
var flash ="https://my-spoiler-alert.com/radek/Flash.png";
var snow = "https://my-spoiler-alert.com/radek/Snow.png";
var mist = "https://my-spoiler-alert.com/radek/Mist3.png";


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
  
    if (appIcon == "01d" || appIcon == "01n") {
        webIcon = sun;
    } else if (appIcon== "02d"||appIcon=="02n" ) {
        webIcon = SunCloud;
    } else if (appIcon =="03d" || appIcon=="03n") {
        webIcon = cloud;
    } else if (appIcon == "04d" ||appIcon=="04n") {
        webIcon = darkCloud;
    } else if (appIcon == "09d" ||appIcon=="09n") {
        webIcon = rain;
    } else if (appIcon == "10d" ||appIcon=="10n") {
        webIcon = SunCloudRain;
    } else if (appIcon == "11d" ||appIcon=="11n") {
        webIcon = flash;
    } else if (appIcon == "13d" ||appIcon=="13n") {
        webIcon = snown;
    } else if (appIcon == "50d" ||appIcon=="50n") {
        webIcon = mist;
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
    } else if (appHumidity >=20 && appHumidity < 60 && appTemp > 15 && appTemp< 25 && appSkyDescription == "clear sky" || appSkyDescription == "few clouds" && appWindStrenght < 13.8) {
        appMood = "It feels great outside!";
    } else if (appHumidity >=20 && appHumidity < 60 && appTemp > 5 && appTemp< 15 && appSkyDescription == "clear sky" || appSkyDescription == "few clouds" && appWindStrenght < 13.8) {
        appMood = "It's a bit chilly, but the air feels good!";   
    } else if (appTemp > 5 && appTemp< 15 && appWindStrenght > 24.4) {
        appMood = "<span style='color:red'>Warning: it's chilly and windy. The real feel temperature might be lower.</span>";
    } else if (appTemp < 5 && appHumidity > 60) {
        appMood = "<span style='color:red'>Warning: cold and humid! The real feel temperature will be even lower!</span>";
    } else if (appTemp >5 && appTemp < 15 && appHumidity > 60) {
        appMood = "Chilly and humid. Lower termal comfort.";        
    } else if (appTemp > 25 && appHumidity > 60) {
        appMood = "<span style='color:red'>Heat warning; possible tiredness and problems with concetration.</span>"
    }else if (appTemp < 25 && appTemp > 20 && appHumidity > 60) {
        appMood = "It's warm and humid; lower termal comfort."
    }else if (appTemp < 5 && appHumidity <60 && appSkyDescription == "few clouds") {
        appMood = "It's cold and a bit cloudy, but the sun should be there in a second!"
    } else if (appTemp < 5 && appHumidity <60 && appSkyDescription == "clear sky") {
        appMood = "It's cold, but the sun should feel nice!";
    }else if (appTemp < 25 && appTemp > 20 && appHumidity > 60) {
        appMood = "It's warm and humid; lower termal comfort.";
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
    }else {
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
