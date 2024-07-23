const apiKey = "bc07c10103cd408dba0120435242606";
const apiUrl = "https://api.weatherapi.com/v1/forecast.json?days=3&";

const search = document.querySelector("#searchBox");
const button = document.querySelector("#btn");

const icon = document.querySelector("#img");
const iconTwo = document.querySelector("#imgTwo");
const iconThree = document.querySelector("#imgThree");

const now = new Date();
const day = now.getDay();
const month = now.getMonth();
const dayDate = now.getDate();

async function checkWeather(city){
    let response = await fetch(apiUrl + `key=${apiKey}` + `&q=${city}`);
    if (response.ok && 400 != response.status) {
        let data = await response.json();
        dispalyCurrent(data.current, data.location);
        displayAnother(data.forecast.forecastday);
        document.querySelector("#weatherHome").classList.replace("d-none", "d-block");
        console.log(data);
    }
    if (response.status == 400){
        document.querySelector("#weatherHome").classList.replace("d-block", "d-none");
    }
}

function dispalyCurrent(c, l){
    switch(day){
        case 0:
            document.querySelector("#dayName").innerHTML = "sunday";
            break;
        case 1:
            document.querySelector("#dayName").innerHTML = "Monday";
            break;
        case 2:
            document.querySelector("#dayName").innerHTML = "Tuesday";
            break;
        case 3:
            document.querySelector("#dayName").innerHTML = "Wednesday";
            break;
        case 4:
            document.querySelector("#dayName").innerHTML = "Thursday";
            break;
        case 5:
            document.querySelector("#dayName").innerHTML = "Friday";
            break;
        case 6:
            document.querySelector("#dayName").innerHTML = "Saturday";
            break;
    }
    switch(month){
        case 0:
            document.querySelector("#date").innerHTML = dayDate + "January";
            break;
        case 1:
            document.querySelector("#date").innerHTML = dayDate + "February";
            break;
        case 2:
            document.querySelector("#date").innerHTML = dayDate + "March";
            break;
        case 3:
            document.querySelector("#date").innerHTML = dayDate + "April";
            break;
        case 4:
            document.querySelector("#date").innerHTML = dayDate + "May";
            break;
        case 5:
            document.querySelector("#date").innerHTML = dayDate + "June";
            break;
        case 6:
            document.querySelector("#date").innerHTML = dayDate + "July";
            break;
        case 7:
            document.querySelector("#date").innerHTML = dayDate + "August";
            break;
        case 8:
            document.querySelector("#date").innerHTML = dayDate + "September";
            break;
        case 9:
            document.querySelector("#date").innerHTML = dayDate + "October";
            break;
        case 10:
            document.querySelector("#date").innerHTML = dayDate + "November";
            break;
        case 11:
            document.querySelector("#date").innerHTML = dayDate + "December";
            break;
    }

    document.querySelector("#name").innerHTML = l.name;
    document.querySelector("#deg").innerHTML = c.temp_c + "°C";
    icon.src = `https:${c.condition.icon}`;
    document.querySelector("#mood").innerHTML = c.condition.text;
    document.querySelector("#umberella").innerHTML ="<img src='image/icon-umberella.png' alt='umberella icon'> "+ c.humidity + "%";
    document.querySelector("#wind").innerHTML ="<img src='image/icon-wind.png' alt='wind icon'> " + c.wind_kph + "km/h";
    document.querySelector("#compass").innerHTML ="<img src='image/icon-compass.png' alt='compass icon'> " + c.wind_dir;
}

function displayAnother(f){
    //day two
    switch(day+1){
        case 0:
            document.querySelector("#dayNameTwo").innerHTML = "sunday";
            break;
        case 1:
            document.querySelector("#dayNameTwo").innerHTML = "Monday";
            break;
        case 2:
            document.querySelector("#dayNameTwo").innerHTML = "Tuesday";
            break;
        case 3:
            document.querySelector("#dayNameTwo").innerHTML = "Wednesday";
            break;
        case 4:
            document.querySelector("#dayNameTwo").innerHTML = "Thursday";
            break;
        case 5:
            document.querySelector("#dayNameTwo").innerHTML = "Friday";
            break;
        case 6:
            document.querySelector("#dayNameTwo").innerHTML = "Saturday";
            break;
    }
    iconTwo.src = `https:${f[1].day.condition.icon}`;
    document.querySelector("#degTwo").innerHTML = f[1].day.maxtemp_c + "°C";
    document.querySelector("#compassTwo").innerHTML = f[1].day.mintemp_c + "°";
    document.querySelector("#moodTwo").innerHTML = f[1].day.condition.text;

    //day three
    switch(day+2){
        case 0:
            document.querySelector("#dayNameThree").innerHTML = "sunday";
            break;
        case 1:
            document.querySelector("#dayNameThree").innerHTML = "Monday";
            break;
        case 2:
            document.querySelector("#dayNameThree").innerHTML = "Tuesday";
            break;
        case 3:
            document.querySelector("#dayNameThree").innerHTML = "Wednesday";
            break;
        case 4:
            document.querySelector("#dayNameThree").innerHTML = "Thursday";
            break;
        case 5:
            document.querySelector("#dayNameThree").innerHTML = "Friday";
            break;
        case 6:
            document.querySelector("#dayNameThree").innerHTML = "Saturday";
            break;
    }
    iconTwo.src = `https:${f[2].day.condition.icon}`;
    document.querySelector("#degThree").innerHTML = f[2].day.maxtemp_c + "°C";
    document.querySelector("#compassThree").innerHTML = f[2].day.mintemp_c + "°";
    document.querySelector("#moodThree").innerHTML = f[2].day.condition.text;
}

button.addEventListener("click", () => {
    if (search.value != ""){
        checkWeather(search.value);
    }
});