// https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=68efa0885519a6f01d76917c463ada68
// https://openweathermap.org/img/w/03d.png
let weatherContainer=document.getElementById('weatherContainer')
async function getWeatherData(){
  let inputcityName=document.getElementById("inputcityName").value
  //console.log(inputcityName)
  console.log("Weather Data is called")
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputcityName}&appid=68efa0885519a6f01d76917c463ada68`
  //console.log(url)
  let data=await fetch(url)
  let res=await data.json()
  console.log(res)
  console.log(res.main)
  const {feels_like,grnd_level,humidity,pressure,sea_level,temp,temp_max,temp_min}=res.main
  const {icon}=res.weather[0]
  console.log(icon)
  console.log(feels_like,grnd_level,humidity,pressure,sea_level,temp,temp_max,temp_min)
  weatherContainer.innerHTML=`
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">   
        <img src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded-start h-100" alt="..." >

    </div>
    <div class="col-md-8">
      <div class="card-body">
      <div>   
    
      <h5 class="card-title">${inputcityName.toUpperCase()}
      <img src="https://openweathermap.org/img/w/${icon}.png" alt="">
      
      </h5>
      </div>
        <p class="card-text p-0 m-0">The Sealevel of the ${inputcityName.toUpperCase()} is${sea_level} and temperature is ${temp}</p>
        <p class="card-text m-0"><small class="text-muted">The Maximum temperature goes up till ${temp_max} and minimum temperature goes down till ${temp_min}</small></p>
         <p class="card-text"><small class="text-muted">The Coordinates of ${inputcityName} is ${res.coord.lon} and ${res.coord.lat}</small></p>

      </div>
    </div>
  </div>
</div>
  `
}
