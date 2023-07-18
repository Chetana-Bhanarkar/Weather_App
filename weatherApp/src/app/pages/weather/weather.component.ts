import { Component } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent{
  city!:string
  weatherData : any ;

  constructor(private weatherService : WeatherService){}

  
  ngOnInit(): void {}

  getWeather(){
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data ;
      console.log(data);

    })
  }
}
