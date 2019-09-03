export default class Weather {
  constructor(data) {
    console.log(data);
    console.log(data.weather[0].description);


    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    this.description = data.weather[0].description
    this.city = data.name
    this.tempF = Math.floor(data.main.temp * (9 / 5) - 459.67)
    this.id = data.id

  }
}