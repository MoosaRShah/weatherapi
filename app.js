const MY_KEY = '4514f63dce70f69a8af8b22cf96c6097'

//function triggered by window loading
window.addEventListener('DOMContentLoaded', () => {
  //declaring variables
  let long, lat

  const locationIcon = document.getElementById('weather-icon'),
    tempDescription = document.getElementById('temperature-description'),
    tempDegree = document.getElementById('temperature-degree'),
    locationName = document.getElementById('location-name')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude
      lat = position.coords.latitude
      //lat and long based api search
      const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${MY_KEY}&units=metric`
      fetch(API)
        .then(res => res.json())
        .then(data => {
          //   console.log(data)
          tempDescription.textContent = data.weather[0].description
          tempDegree.innerHTML = `${data.main.temp}<span class='c'>C</span>`
          locationName.textContent = data.name
          const { icon } = data.weather[0]
          locationIcon.innerHTML = `<img src="icons/${icon}.png">`
        })
    })
  }
})
