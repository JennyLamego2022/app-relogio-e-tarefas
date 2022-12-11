// 'use strict'

const api = {
    key: "12671e3e633723331455b685b8124d02",
    base: `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`,
    lang: "pt-br",
    units: "metrice"
} 

// const pesquisaCity = async () => {
//     const cidade = document.querySelector(".localizacao").value;
//     const url = `http://api.openweathermap.org/data/2.5/`;
//     const dados = await fetch(url);
//     const local = await dados.json();
    
//     console.log(local)
// }



const city = document.querySelector(".localizacao");
const data = document.querySelector('.data');
// const container_img = document.querySelector('.container-img');
const container_temp = document.querySelector('#temperatura');
// const temp_number = document.querySelector('.container-temp div');
// const temp_unit = document.querySelector('.container-temp span');
const tempo = document.querySelector('#tempo');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');
const min_max = document.querySelector('#min_max');


//adiciona com click

search_button.addEventListener('click', function() {
    searchResults(search_input.value)
})

//adiciona com enter

search_input.addEventListener('keypress', enter)
function enter(event) {
    key = event.keyCode
    if (key === 13) {
        searchResults(search_input.value)
    }
}

//função

function searchResults(city) {
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        });
}

function displayResults(weather) {
    console.log(weather)

    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    date.innerText = dateBuilder(now);

    let iconName = weather.weather[0].icon;
    container_img.innerHTML = `<img src="./icons/${iconName}.png">`;

    let temperature = `${Math.round(weather.main.temp)}`
    temp_number.innerHTML = temperature;
    temp_unit.innerHTML = `°c`;

    weather_tempo = weather.weather[0].description;
    weather_t.innerText = capitalizeFirstLetter(weather_tempo)

    low_high.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder(d) {
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let day = days[d.getDay()]; //getDay: 0-6
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}

container_temp.addEventListener('click', changeTemp)
function changeTemp() {
    temp_number_now = temp_number.innerHTML

    if (temp_unit.innerHTML === "°c") {
        let f = (temp_number_now * 1.8) + 32
        temp_unit.innerHTML = "°f"
        temp_number.innerHTML = Math.round(f)
    }
    else {
        let c = (temp_number_now - 32) / 1.8
        temp_unit.innerHTML = "°c"
        temp_number.innerHTML = Math.round(c)
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// const localzacao = (fusoHorario) => {
//     document.getElementById('fuso').value = fusoHorario.
// }


// const url = `https://api.bigdatacloud.net/data/timezone-by-ip`

// console.log(url);