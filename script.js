var apiKey = "fdc98e48be30c2f81d5edbdc91dee8ed";
var cityName = document.getElementById("selectCity");
var cityArray = [];
var currentCity = document.getElementById("current-container");
var time = moment().format("MMM Do, YYYY  hh:mm:ss");
// var unixFormat = moment.unix().format("MMM Do, YYYY, hh:mm:ss");
// var unix = moment().format("X")


document.getElementById("submit-button").addEventListener("click", function () {
  if (cityArray.length < 7){ 
    cityArray.push(cityName.value)
  } 
  else {
    cityArray.shift()
    cityArray.push(cityName.value)
    
  }

  localStorage.setItem("cities", cityArray);
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" +
  cityName.value +
  "&appid=" +
  apiKey +
  "&units=imperial")
.then(function (response){
  return response.json();
}) .then(function (data){
  // update lines 27 through 31 with the query selector queries to target the right HTML element and data selectors from console log
  document.querySelector("#day-0").setAttribute("src",`http://openweathermap.org/img/wn/${data.list[4].weather.icon}@2x.png`)
  document.querySelector("#day-0-temp").innerHTML="Noon Temp: " + data.list[4].main.temp + " °F"
  document.querySelector("#day-0-wind").innerHTML="Wind: " + data.list[4].wind.speed + "mph"
  document.querySelector("#day-0-humidity").innerHTML="Humidity: " + data.list[4].main.humidity 

  document.querySelector("#day-1").setAttribute("src",`http://openweathermap.org/img/wn/${data.list[4].weather.icon}@2x.png`)
  document.querySelector("#day-1-temp").innerHTML="Noon Temp: " + data.list[10].main.temp + " °F"
  document.querySelector("#day-1-wind").innerHTML="Wind: " + data.list[10].wind.speed + "mph"
  document.querySelector("#day-1-humidity").innerHTML="Humidity: " + data.list[10].main.humidity 

  document.querySelector("#day-2").setAttribute("src",`http://openweathermap.org/img/wn/${data.list[18].weather.icon}@2x.png`)
  document.querySelector("#day-2-temp").innerHTML="Noon Temp: " + data.list[18].main.temp + " °F"
  document.querySelector("#day-2-wind").innerHTML="Wind: " + data.list[18].wind.speed + "mph"
  document.querySelector("#day-2-humidity").innerHTML="Humidity: " + data.list[18].main.humidity 

  document.querySelector("#day-3").setAttribute("src",`http://openweathermap.org/img/wn/${data.list[26].weather.icon}@2x.png`)
  document.querySelector("#day-3-temp").innerHTML="Noon Temp: " + data.list[26].main.temp + " °F"
  document.querySelector("#day-3-wind").innerHTML="Wind: " + data.list[26].wind.speed + "mph"
  document.querySelector("#day-3-humidity").innerHTML="Humidity: " + data.list[26].main.humidity 

  document.querySelector("#day-4").setAttribute("src",`http://openweathermap.org/img/wn/${data.list[34].weather.icon}@2x.png`)
  document.querySelector("#day-4-temp").innerHTML="Noon Temp: " + data.list[34].main.temp + " °F"
  document.querySelector("#day-4-wind").innerHTML="Wind: " + data.list[34].wind.speed + "mph"
  document.querySelector("#day-4-humidity").innerHTML="Humidity: " + data.list[34].main.humidity 

  console.log(data)
})
 fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName.value +
      "&units=imperial&appid=" +
      apiKey
  )
    .then(function (response) {
    
      return response.json();

    })
    .then(function (data) {
    
      document.querySelector("#current-weather-container > h3 > span").innerHTML=data.name
      document.querySelector("#current-weather-container > h3 > img").setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
      document.querySelector("#current-container > ul").children[0].innerHTML="Temp: " + data.main.temp + " °F"
      document.querySelector("#current-container > ul").children[1].innerHTML="Wind: " + data.wind.speed + " mph"
      document.querySelector("#current-container > ul").children[2].innerHTML="Humidity: " + data.main.humidity +"%"
      $("#current-date-time").text(time)
      console.log(data);
      console.log(data.main)
    });
});

