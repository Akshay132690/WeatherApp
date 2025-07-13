const weatherApi={
    key:"372a850f6ffd90d25d2e3e446445cf00",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
//Anonymous function
const searchinputbox=document.getElementById("input_box");
searchinputbox.addEventListener("keypress",(event)=>{
   if(event.keyCode == 13)
   {
    console.log(searchinputbox.value);
    getWeatherReport(searchinputbox.value);
   }
});

//get weather report
function getWeatherReport(city)
{
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();

    }).then(showWeatherReport);
}

//show weather report
function showWeatherReport(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText= `${weather.name},${weather.sys.country}`;

    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp=document.getElementById('min_max');
    minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min) /${Math.ceil(weather.main.temp_max)}&deg;C (max)`;


    let weatherType =document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let date=document.getElementById('date');
    let todayDate=new Date();
    date.inputText= dateManage(todayDate);
 
    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage= "url('https://im.indiatimes.in/photogallery/2021/May/delhi-clear-blue-sky10_60aa021493ee0.jpg')"
    }
    if(weatherType.textContent == 'Sunny'){
        document.body.style.backgroundImage= "url('https://wallpaperaccess.com/full/2903126.jpg')"
    }
    if(weatherType.textContent == 'Smoke'){
        document.body.style.backgroundImage= "url('https://www.abc4.com/wp-content/uploads/sites/4/2021/08/air-quality-1.png')"
    }
    if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage= "url('https://cdn.pixabay.com/photo/2018/05/18/19/53/rain-3411982_1280.jpg')"
    }
    if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage= "url('https://p4.wallpaperbetter.com/wallpaper/1013/681/120/afternoon-architecture-building-buildings-wallpaper-preview.jpg')"
    }
    if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1533757704860-384affeed946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZXxlbnwwfHwwfHw%3D&w=1000&q=80')"
    }




}
//date manage
function dateManage(dateArg)
{
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}),${year}`;
}










// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

