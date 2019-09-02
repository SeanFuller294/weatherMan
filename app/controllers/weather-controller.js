import WeatherService from "../services/weather-service.js";

var _weatherService = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//TODO Complete rendering data to the screen
function drawWeather() {
	let weather = document.getElementById("weather")
	weather.style.backgroundColor = "rgba(0,0,0,.4)"
	weather.style.color = "white"
	let temp = _weatherService.Weather
	// @ts-ignore
	weather.innerHTML = temp.tempF + "°F"
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
