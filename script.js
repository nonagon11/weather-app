const inputbox=document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.Weather-image');
const tempertaure = document.querySelector('.Temperature')
const description = document.getElementById('description')
const humidity= document.getElementById('humidity')
const wind_speed = document.getElementById('windspeed')
const des_img = document.getElementById("des-img")

console.log(searchbtn)
console.log("Hello")
async function checkweather(city) {
    const api_key = "32e6053a168c95c4107c5df5e15424e7"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(Response => Response.json());
    
    console.log(weather_data);
    
    tempertaure.textContent = parseInt(weather_data["main"]["temp"]-273) + "°C";
    
    description.textContent = weather_data["weather"][0]["description"];
    
    humidity.textContent = `${weather_data.main.humidity}%`;
    
    console.log(weather_data["wind"]["speed"])
    
    wind_speed.textContent = parseFloat(weather_data["wind"]["speed"]);

}
searchbtn.addEventListener('click', ()=>{
    checkweather(inputbox.value);
})

