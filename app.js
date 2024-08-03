let search = document.getElementById('search');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');

let description = document.querySelector('.description');
let form = document.querySelector('form');
let main = document.querySelector('main');

let id = 'e8c11d0252107ddf1f7051a29fb2e8f2';
let url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (search.value != '') {
        searchWeather();
    }
});
const searchWeather = () => {
    fetch(url + '&q=' + search.value).then(responsive => responsive.json()).then(data => {
        console.log(data);
        if (data.cod == 200) {
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = 'https://flagsapi.com/' + data.sys.country + '/shiny/32.png';

            temp.querySelector('img').src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
            temp.querySelector('figcaption span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        } else {
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }
        search.value = '';
    });
}
const initApp = () => {
    search.value = 'Vietnam';
    searchWeather();
}
initApp();