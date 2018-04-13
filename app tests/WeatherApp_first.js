
// https://en.wikipedia.org/wiki/Beaufort_scale

// example of another app https://codepen.io/Bumble3Bee/pen/XaLvqY 

// API call http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=68c2f29a956ecd67447dbce69f9b954b

function loadLocation () {
    document.querySelector("#location").innerHTML = "<span style='font-weight:bold'>" + appCity + '</span>, ' + appCountryCode;
    
};

var weatherKey = "68c2f29a956ecd67447dbce69f9b954b";
var weatherUrl;
// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&APPID=68c2f29a956ecd67447dbce69f9b954b
// api.openweathermap.org/data/2.5/weather?lat=35&lon=139

function getWeatherUrl() {
// weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" +  appLat + "&lon=" + appLon + "&units=metric&APPID="+ weatherKey;

// weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Kongolo,CD&units=metric&APPID="+key;

// weatherUrlFahrenheit =  "http://api.openweathermap.org/data/2.5/weather?q="+appCity + ',' + appCountryCode + "&units=imperial&APPID="+key;
};

function loadWeather (){
document.querySelector("#temp").innerHTML= "<span style='font-weight:bold'>Temperature:</span> " + appTemp + "°C";
document.querySelector("#sky").innerHTML = appSky;
document.querySelector("#description").innerHTML = appSkyDescription;
document.querySelector("#icon").innerHTML="<img src=" +appIcon+">";
// document.querySelector("#icon").innerHTML="<img src='https://my-spoiler-alert.com/radek/Mist3.png'>";
document.querySelector("#windSpeed").innerHTML= "<span style='font-weight:bold'>Wind:</span> " + appWindSpeed + " m/s";
document.querySelector("#windStrenght").innerHTML= appWindStrenght;
document.querySelector("#pressure").innerHTML = "<span style='font-weight:bold'>Pressure:</span> " + appPressure + " hpa";
document.querySelector("#humidity").innerHTML= "<span style='font-weight:bold'>Humidity:</span> " + appHumidity + " %";
// document.querySelector("#sunrise").innerHTML = "Sunrise: " + appSunrise;
// document.querySelector("#sunset").innerHTML="Sunset: " +appSunset;
document.querySelector("#mood").innerHTML=appMood;
};

var appCity;
var appCountry;
var appCountryCode;
var appLat;
var appLon;
var appRegion;
var appRegionName;
var appTimeZone;

var appTemp;
var appSky;
var appSkyDescription;
var appIcon;
var appWindSpeed;
var appPressure;
var appHumidity;
// var appSunrise;
// var appSunset;
var appMood;

var positionKey = "Fyg_6xZQK2SwgdvnqQDy";
var positionUrl = "https://api.pickpoint.io/v1/lookup/?key=" + positionKey;

// https://api.pickpoint.io/v1/lookup/?key=Fyg_6xZQK2SwgdvnqQDy


  $.ajax({
  url: positionUrl,
  type: 'GET',
  success: function(positionJson) {

    // appCity = positionJson.city trigger from weather API or nothing

    // appLon= positionJson.latitude;
    // appLat = positionJson.longitude;
    appCountryCode = positionJson.country_code;    
    loadLocation();
    getWeatherUrl();
    console.log(weatherUrl);
    getWeather();
    console.log(positionJson);
  },
  error: function(err) {
    console.log("Request failed, error= " + err);
  }
});

// weather icons 
// var sun = "https://my-spoiler-alert.com/radek/Sun5.png";
// var SunCloud = "https://my-spoiler-alert.com/radek/SunCloud2.png";
// var cloud = "https://my-spoiler-alert.com/radek/Cloud.png";
// var SunCloudRain = "https://my-spoiler-alert.com/radek/SunCloudRain2.png";
// var darkCloud = "https://my-spoiler-alert.com/radek/DarkCloud.png";
// var rain = "https://my-spoiler-alert.com/radek/CloudRaindrop.png";
// var flash ="https://my-spoiler-alert.com/radek/Flash.png";
// var snow = "https://my-spoiler-alert.com/radek/Snow.png";
// var mist = "https://my-spoiler-alert.com/radek/Mist3.png";

function getWeather() {
  $.ajax({
  url: weatherUrl,
  type: 'GET',
  success: function(weatherJson){    
    appTemp  = weatherJson.main.temp;
    appSky = weatherJson.weather[0].main;
    appSkyDescription = weatherJson.weather[0].description;
    appIcon = "https://openweathermap.org/img/w/" + weatherJson.weather[0].icon + ".png";
    appWindSpeed = weatherJson.wind.speed;
    appPressure = weatherJson.main.pressure;
    appHumidity =weatherJson.main.humidity;
    // appSunrise = weatherJson.sys.sunrise;
    // appSunset = weatherJson.sys.sunset;

    // additional comment regarding the wind strenght
    if (appWindSpeed < 0.3) {
        appWindStrenght = "Very calm/no wind."
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
        document.querySelector("#temp").innerHTML= "<span style='font-weight:bold'>Temperature:</span> " + Math.round((appTemp * 9/5 +32)* 100) / 100 + "°F";
        document.querySelector("#switchButton").innerHTML = "switch to °C";
        clickControl = !clickControl;
        } else {
        document.querySelector("#temp").innerHTML= "<span style='font-weight:bold'>Temperature:</span> " + appTemp + "°C";
        document.querySelector("#switchButton").innerHTML = "switch to °F";
        clickControl = !clickControl;
        }
    };
   
document.querySelector("#switchButton").addEventListener("click", getFahrenheit);
  
  },
  error: function (err2) {
      console.log("Second ajax request failed, error = " + err2);
  }
})

};
