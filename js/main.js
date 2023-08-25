let apiKey = "4092c71e8d3c4b1ce7d934e8d30128a0";
let searchBtn = document.getElementById("searchBtn");
function fetchFunc(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".cityName").innerHTML = "weather in " + city;
      document.querySelector(".degree").innerHTML = data.main.temp + "°C";
      document.querySelector(".desc").innerHTML = data.weather[0].description;
      document.querySelector(".humidity").innerHTML =
        "humidity : " + data.main.humidity + "%";
      document.querySelector(".wind").innerHTML =
        "wind speed : " + data.wind.speed + "km/h";
      document.querySelector(
        ".shape"
      ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector("body").style.backgroundImage =
        "url(" + "https://source.unsplash.com/1600x900/?" + city + ")";
    });
}

searchBtn.addEventListener("click", () => {
  let city = document.querySelector(".myInput").value;
  fetchFunc(city);
});
let TheInput = document.querySelector(".myInput");
TheInput.addEventListener("keyup", (e) => {
  let city = document.querySelector(".myInput").value;
  if (e.key == "Enter") {
    fetchFunc(city);
  }
});
