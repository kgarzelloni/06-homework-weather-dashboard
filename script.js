var apiKey = "fdc98e48be30c2f81d5edbdc91dee8ed";
var cityName = document.getElementById("selectCity");
var cityArray = [];
var currentCity = document.getElementById("current-container");

// var cityFetch =fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
document.getElementById("submit-button").addEventListener("click", function () {
  if (cityArray.length < 7){ 
    cityArray.push(cityName.value)
  } 
  else {
    cityArray.shift()
    cityArray.push(cityName.value)
    
  }

  localStorage.setItem("cities", cityArray);
 fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName.value +
      "&units=imperial&appid=" +
      apiKey
  )
    .then(function (response) {
      currentCity.textContent = data.items, main
      return response.json();

    })
    .then(function (data) {
      console.log(data);
    });
});

