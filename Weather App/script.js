const apiKey = "d6745a53bc01a44815d96b8590bf1ba4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();