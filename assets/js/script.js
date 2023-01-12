const mapLocation = document.getElementsByClassName('forecast-content-overview');
const locationTemp = document.getElementsByClassName('forecast-content-temp');
const forecastOverview = document.getElementsByClassName('component-forecast-box');
const weatherDetails = document.querySelector('.weatherDetails');
const key = '598b748f377d6aac1a5cd4362eb4415e'
var submitEl = $('#submitBtn');
var city = $('#citySearch');
var tempCity = document.querySelector('#temp')
var windCity = document.querySelector('#wind')
var humidityCity = document.querySelector('#humidity')
var dateCity = document.querySelector('.date')
var currentCitySearched = document.querySelector('.currentCitySearched')

// console.log(city);


function getWeatherForecast() {
    console.log('works');
    fetchAPI();
    getCoords(city.val())
    currentCitySearched.textContent = "City: " + city.val()
}

function fetchAPI(){
    console.log(city.val());
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&appid=" + key;
    console.log("URL: ", weatherUrl)
 //   const response = fetch(weatherUrl);
 //   console.log(response)
    fetch(weatherUrl)
        .then(response => {
           // console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);

            // Let's Pull apart the DATA OBJECT
            

            // make second API request


        })
        .catch(error => {
            console.log(error);
        });

}

function getCoords(cityName) {
    fetch(`https://geocode.maps.co/search?q=${cityName}`)
    .then(response => {
       // console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        let lat = data[0].lat;
        let lon = data[0].lon;
        console.log(lat, lon);

        let forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`

        let url2 = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}`

        fetch(forcastUrl )
            .then(response => {
              //  console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data)
                    dateCity.textContent = "Date: " + data.list[4].dt_txt
                    var iconcode = data.list[4].weather[0].icon;
                    var iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
                    $('img').attr('src', iconurl);
                    tempCity.textContent = "Temperature: " + ((((data.list[4].main.temp) - 273.15) * 9/5 + 32).toFixed(2))  + " °F"
                    windCity.textContent = "Wind: " + data.list[4].wind.speed + " MPH"
                    humidityCity.textContent = "Humidity: " + data.list[4].main.humidity + " %"

                    var dateZero = document.querySelector('.date0')
                    var iconcode0 = data.list[12].weather[0].icon;
                    var iconurl0 = `http://openweathermap.org/img/w/${iconcode0}.png`;
                    var tempCityZero = document.querySelector('#temp0')
                    var windCityZero = document.querySelector('#wind0')
                    var humidityCityZero = document.querySelector('#humidity0')
                    dateZero.textContent = "Date: " + data.list[12].dt_txt
                    $('img0').attr('src', iconurl0);
                    tempCityZero.textContent = "Temperature: " + ((((data.list[12].main.temp) - 273.15) * 9/5 + 32).toFixed(2))  + " °F"
                    windCityZero.textContent = "Wind: " + data.list[12].wind.speed + " MPH"
                    humidityCityZero.textContent = "Humidity: " + data.list[12].main.humidity + " %"

                    var dateOne = document.querySelector('.date1')
                    dateOne.textContent = "Date: " + data.list[20].dt_txt
                    var iconcode1 = data.list[20].weather[0].icon;
                    var iconurl1 = `http://openweathermap.org/img/w/${iconcode1}.png`;
                    $('img1').attr('src', iconurl1);
                    var tempCityOne = document.querySelector('#temp1')
                    tempCityOne.textContent = "Temperature: " + ((((data.list[20].main.temp) - 273.15) * 9/5 + 32).toFixed(2))  + " °F"
                    var windCityOne = document.querySelector('#wind1')
                    windCityOne.textContent = "Wind: " + data.list[20].wind.speed + " MPH"
                    var humidityCityOne = document.querySelector('#humidity1')
                    humidityCityOne.textContent = "Humidity: " + data.list[20].main.humidity + " %"

                    var dateTwo = document.querySelector('.date2')
                    dateTwo.textContent = "Date: " + data.list[28].dt_txt
                    var iconcode2 = data.list[28].weather[0].icon;
                    var iconurl2 = `http://openweathermap.org/img/w/${iconcode2}.png`;
                    $('img2').attr('src', iconurl2);
                    var tempCityTwo = document.querySelector('#temp2')
                    tempCityTwo.textContent = "Temperature: " + ((((data.list[28].main.temp) - 273.15) * 9/5 + 32).toFixed(2))  + " °F"
                    var windCityTwo = document.querySelector('#wind2')
                    windCityTwo.textContent = "Wind: " + data.list[28].wind.speed + " MPH"
                    var humidityCityTwo = document.querySelector('#humidity2')
                    humidityCityTwo.textContent = "Humidity: " + data.list[28].main.humidity + " %"

                    var dateThree = document.querySelector('.date3')
                    dateThree.textContent = "Date: " + data.list[36].dt_txt
                    var iconcode3 = data.list[36].weather[0].icon;
                    var iconurl3 = `http://openweathermap.org/img/w/${iconcode3}.png`;
                    $('img3').attr('src', iconurl3);
                    var tempCityThree = document.querySelector('#temp3')
                    tempCityThree.textContent = "Temperature: " + ((((data.list[36].main.temp) - 273.15) * 9/5 + 32).toFixed(2))  + " °F"
                    var windCityThree = document.querySelector('#wind3')
                    windCityThree.textContent = "Wind: " + data.list[36].wind.speed + " MPH"
                    var humidityCityThree = document.querySelector('#humidity3')
                    humidityCityThree.textContent = "Humidity: " + data.list[36].main.humidity + " %"

                    var dateFour = document.querySelector('.date4')
                    dateFour.textContent = "Date: " + data.list[40].dt_txt
            })
            .catch(error => {
                console.log(error);
            });

            
    })
    .catch(error => {
        console.log(error);
    })
}

$('#submitBtn').on("click", getWeatherForecast);