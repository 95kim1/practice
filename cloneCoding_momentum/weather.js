const weather = document.querySelector(".js-weather");

const OPEN_WEATHER_API_KEY = "0ac9639624a79aecf1f0ff8031ae87b9";
const COORDS_LOCAL_STORAGE = "coords";

function getWeather(latitude, longitude) {
    console.log(latitude);
    console.log(longitude);
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    ).then((response)=>{
        return response.json();
    }).then((json)=>{
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}°C @${place}`
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LOCAL_STORAGE, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,//===latitude:latitude
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can\'t access geo location")
    weather.innerText = 'Not allowed to access the position.'
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);

}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LOCAL_STORAGE);
    if (loadedCoords===null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();