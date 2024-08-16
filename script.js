// const apiKey = "8f514009e19bee64cc76815d925cf02c"
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let searchBox = document.querySelector('.search input')
let searchBtn = document.querySelector('.search button')


async function getWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=8f514009e19bee64cc76815d925cf02c`)
    var data = await response.json()

    console.log(data);

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %"
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " °C"
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main == 'Clouds') {
        document.querySelector('.weather img').src = "./images/clouds.png"
    }
    else if(data.weather[0].main == 'Clear') {
        document.querySelector('.weather img').src = "./images/clear.png"
    }
    else if(data.weather[0].main == 'Drizzle') {
        document.querySelector('.weather img').src = "./images/rain.png"
    }
    else if(data.weather[0].main == 'Snow') {
        document.querySelector('.weather img').src = "./images/drizzle.png"
    }
    else if(data.weather[0].main == 'Mist') {
        document.querySelector('.weather img').src = "./images/mist.png"
    }
    else if(data.weather[0].main == 'Rain') {
        document.querySelector('.weather img').src = "./images/rain.png"
    }
}

searchBtn.addEventListener('click', ()=> {
    getWeatherData(searchBox.value)
})

getWeatherData()
