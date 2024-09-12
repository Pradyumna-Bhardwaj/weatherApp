const apiKey = "eb299c39349839671d39ecd5ee774bc4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?"

    
async function checkWeather(city) {
const response = await fetch(`${apiUrl}units=metric&q=${city}` + `&appid=${apiKey}`);
var data = await response.json();
console.log(data);
showWeather(data);
}

function showWeather(data){
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

weatherFn('Pune');