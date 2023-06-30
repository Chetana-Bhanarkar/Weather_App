import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  api_key = '6254859630d3005a8eb959d867a45f78'
  constructor(private http : HttpClient){}

  getWeather(city:String){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}&units=metric`)
  }
}
