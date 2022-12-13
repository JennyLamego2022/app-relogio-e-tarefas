const api = {
    key: "12671e3e633723331455b685b8124d02",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
} 


const city = document.querySelector(".city");
const date = document.querySelector('.date');
const container_img = document.querySelector('.container-img');
const container_temp = document.querySelector('.container-temp');
const temp_number = document.querySelector('.container-temp div');
const temp_unit = document.querySelector('.container-temp span');
const weather_t = document.querySelector('#weather');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');
const low_high = document.querySelector('#low-high');


//Geolocalização

window.addEventListener('load', () => {
    //if ("geolocation" in navigator)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
    else {
        alert('navegador não suporta geolozalicação');
    }
    function setPosition(position) {
        console.log(position)
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        coordResults(lat, long);
    }
    function showError(error) {
        alert(`erro: ${error.message}`);
    }
})

function coordResults(lat, long) {
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
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
    container_img.innerHTML = `<img src="./imagens/icons/${iconName}.png">`;

    let temperature = `${Math.round(weather.main.temp)}`
    temp_number.innerHTML = temperature;
    temp_unit.innerHTML = `°c`;

    weather_t.innerText = weather.weather[0].description;

    low_high.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    var container1 = document.querySelector(".container1");
    container1.style.backgroundImage = `url('https://source.unsplash.com/1920x1080/?"+ ${weather.name} +"')`;
    console.log(weather.name)

    // var hora = document.querySelector('.hora');
    // hora.innerHTML = ` curl(http://worldtimeapi.org/api/?"+ ${weather.name} +"')`;
    // console.log(hora)

    
}



function dateBuilder(d) {
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

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

//Relogio

const hora = document.querySelector('.hora');

function time() {

    // function pad(s) {
    //     return (s <10) ? '0' + s : s;
    // }
    today=new Date();
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();
    document.querySelector('.hora').innerHTML =`${h < 10 ? '0'+h : h}:${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`
    setTimeout('time()',500);
}



// const hora = document.querySelector('.hora');
// function time() {
//     function pad(s) {
//         return (s < 10) ? '0' + s : s;
//     }
//     var date = new Date();
//     return [date.getHours(), date.getMinutes()].map(pad).join(':');
//     document.querySelector('.hora').innerHTML=h+":"+m+":"+s;
//      setTimeout('time()',500);
// }