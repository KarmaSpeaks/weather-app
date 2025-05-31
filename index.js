// const url =
//   "https://api.openweathermap.org/data/2.5/weather?lat=22.657402&lon=88.867180&appid=436ec5f70af9ef59640dc832f0f15af0&units=metric";
// let weatherData = fetch(url);
// weatherData
//   .then((value) => {
//     return value.json();
//   })
//   .then((value) => {
//     console.log(value.weather[0].main);
//   });

const apiKey = "436ec5f70af9ef59640dc832f0f15af0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + `&q=${cityName}&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  if (data.weather[0].main == "Clouds") {
    document.querySelector(".weather-icon").src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".weather-icon").src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".weather-icon").src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".weather-icon").src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    document.querySelector(".weather-icon").src = "images/snow.png";
  } else {
    document.querySelector(".weather-icon").src = "images/rain.png";
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

document.querySelector(".search button").addEventListener("click", () => {
  let inputValue = document.querySelector(".search input").value;
  checkWeather(inputValue);
  document.querySelector(".search input").value = "";
});
