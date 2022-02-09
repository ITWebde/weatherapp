let apiKey = 'fe90ef27cdc82f78a658a073edd13e12'


let elExit = document.querySelector('.back')
let elTitle = document.querySelector('.name-city')
let elTextTemp = document.querySelector('.temp')
let elWeatherMain = document.querySelector('.temp')
let elSpeed = document.querySelector('.speed')
let deg = document.querySelector('deg')

var lat = localStorage.getItem("lat")
var lon = localStorage.getItem("long")

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
        elTitle.textContent = data.name
        elTextTemp.textContent = data.main.temp
        elWeatherMain.textContent = data.weather[0].main
        elSpeed.textContent = data.wind.speed
        deg.textContent = data.wind.deg
    })

function handleExit() {
    window.location = '../index.html'
}
elExit.addEventListener('click', handleExit)


