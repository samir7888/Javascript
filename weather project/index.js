const btn = document.getElementById("searchBtn");
let cityName = document.getElementById("cityName");
const apiKey = "14f2a7cb37d9964635097577a0796a62";

async function fetchData(cityName) {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    let result = await res.json();
    if (result.message) {
      document.getElementById(
        "secondDiv"
      ).innerHTML = `<h1>${cityName} ${result.message}</h1>`;
    } else {
      displayWeather(result);
    }
  } catch (e) {
    console.log(e.cod);
  }
}
async function fetchDatabyCoordinates(latitude, longitude) {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    );
    let result = await res.json();
    if (result.message) {
      document.getElementById(
        "secondDiv"
      ).innerHTML = `<h1>${cityName} ${result.message}</h1>`;
    } else {
      displayWeather(result);
    }
  } catch (e) {
    console.log(e.cod);
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(cityName.value);
  cityName.value = "";
  console.log(cityName.value);
});

function displayWeather(result) {
  document.getElementById("secondDiv").innerHTML = `
    <div id="weatherInfo">
        <p id="temp">${result.main.temp}°C</p>
          <p id="city">${result.name}</p>
          <div class="otherInfo">
            <div class="wind">
              <div><p>Wind</p></div>
              <div>${result.wind.speed}m/hr</div>
            </div>
            <div class="wind">
              <div><p>Pressure</p></div>
              <div>${result.main.pressure}</div>
            </div>
            <div class="wind">
              <div><p>Humidity</p></div>
              <div>${result.main.humidity}%</div>
            </div>
          </div>
        </div>`;
}

document.getElementById("currLoc").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lati = position.coords.latitude;
    let longi = position.coords.longitude;
    fetchDatabyCoordinates(lati, longi);
  });
});
