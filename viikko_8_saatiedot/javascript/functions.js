'use strict'

const temp_span = document.querySelector('#temp');
const speed_span = document.querySelector('#speed');
const direction_span = document.querySelector('#direction');
const description_span = document.querySelector('#description');
const icon_img = document.querySelector('img');

let lat='0.0';
let lng='0.0';

const url = 'https://api.openweathermap.org/data/2.5/weather?'
const icon_url ='http://openweathermap.org/img/wn/'
const api_key = '' /*Poista ennen palautusta!! */

const getWeather = () => {

    const address = 
    url + 
    'lat=' +lat+
    '&lon=' +lng+
    '&units=metric' +
    '&APPID=' + api_key

    axios.get(address)
        .then(response => {
            const json =response.data
            temp_span.innerHTML = json.main.temp + '&#8451;'
            speed_span.innerHTML= json.wind.speed + ' m/s'
            direction_span.innerHTML =json.wind.deg + '&#176'
            description_span.innerHTML = json.weather[0].description
            const image = icon_url + json.weather[0].icon + '@2x.png'
            icon_img.src = image
        }).catch(error =>{
            alert(error)
        })
}


const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.querySelector('#lat').innerHTML = position.coords.latitude.toFixed(3) +', '
            document.querySelector('#lng').innerHTML = position.coords.longitude.toFixed(3)
            lat = position.coords.latitude.toFixed(3)
            lng = position.coords.longitude.toFixed(3)
            getWeather()
        }),
        (error => {
            alert(error)
        })
    }
    else {
        alert("Your browser does not support geolocation!")
    }
}

getLocation()






