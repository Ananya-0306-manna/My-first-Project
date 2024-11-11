
const apiKey = "9c35118464e913fbb82e99e0892f4245";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    console.log(data);
    
    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "mist.png";
    }

}
    
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })

