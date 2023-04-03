function sub(event) {
  event.preventDefault();
  let input = document.querySelector(".search");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `<strong>${input.value}</strong>`;

  function locationInfo(response) {
    let temperature = Math.round(response.data.main.temp);
    let currentTemp = temperature;
    let currentDeg = document.querySelector("#degree");
    currentDeg.innerHTML = `${currentTemp}°C`;
    let humidity = document.querySelector(".hum");
    humidity.innerHTML = response.data.main.humidity;
    let pressure = document.querySelector(".press");
    pressure.innerHTML = response.data.main.pressure;
    let wind = document.querySelector(".wind");
    let currentWind = Math.round(response.data.wind.speed);
    wind.innerHTML = currentWind;
    let tempDescription = document.querySelector("#description");
    let currentDes = response.data.weather[0].description;
    tempDescription.innerHTML = currentDes;
  }

  let unit = "metric";
  let city = input.value;
  let apiKey = "6caa6b54cfc577ffc9ddc75950d7efc3";
  let urlStart = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${urlStart}${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(locationInfo);
}

let submit = document.querySelector("#btn");
submit.addEventListener("submit", sub);

function currentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "6caa6b54cfc577ffc9ddc75950d7efc3";
  let startPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${startPoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getInfo);

  function getInfo(response) {
    let city = document.querySelector("h2");
    city.innerHTML = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    let currentTemp = temperature;
    let currentDeg = document.querySelector("#degree");
    currentDeg.innerHTML = `${currentTemp}°C`;
    let humidity = document.querySelector(".hum");
    humidity.innerHTML = response.data.main.humidity;
    let pressure = document.querySelector(".press");
    pressure.innerHTML = response.data.main.pressure;
    let wind = document.querySelector(".wind");
    let currentWind = Math.round(response.data.wind.speed);
    wind.innerHTML = currentWind;
    let tempDescription = document.querySelector("#description");
    let currentDes = response.data.weather[0].description;
    tempDescription.innerHTML = currentDes;
  }
}

function geoLocation() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", geoLocation);

let weeks = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let myDate = new Date();
let year = myDate.getFullYear();
let month = months[myDate.getMonth()];
let day = weeks[myDate.getDay()];
let date = myDate.getDate();
if (date < 10) {
  date = `0${date}`;
}
let hour = myDate.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let min = myDate.getMinutes();
if (min < 10) {
  min = `0${min}`;
}
let sec = myDate.getSeconds();
if (sec < 10) {
  sec = `0${sec}`;
}
let time = document.querySelector(".time");
time.innerHTML = ` <strong>Time:</strong> ${hour}:${min}:${sec} GMT <br>(West Africa Standard Time)`;
let days = document.querySelector(".day");
days.innerHTML = `<strong>${day},</strong>`;
let dates = document.querySelector("#date");
dates.innerHTML = `<strong> ${date} ${month},${year}</strong>`;

function locationInfo(response) {
  console.log(response);

  let temperature = Math.round(response.data.main.temp);
  let currentTemp = temperature;
  let currentDeg = document.querySelector("#degree");
  currentDeg.innerHTML = `${currentTemp}°C`;
  let humidity = document.querySelector(".hum");
  humidity.innerHTML = response.data.main.humidity;
  let pressure = document.querySelector(".press");
  pressure.innerHTML = response.data.main.pressure;
  let wind = document.querySelector(".wind");
  let currentWind = Math.round(response.data.wind.speed);
  wind.innerHTML = currentWind;
  let tempDescription = document.querySelector("#description");
  let currentDes = response.data.weather[0].description;
  tempDescription.innerHTML = currentDes;
}
let unit = "metric";
let apiKey = "6caa6b54cfc577ffc9ddc75950d7efc3";
let urlStart = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiUrl = `${urlStart}abuja&appid=${apiKey}&units=${unit}`;
axios.get(apiUrl).then(locationInfo);
