import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

getWeather(){
  return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=84328ff6ad7bee862aa3ba60e70d7dde&units=metric&lang=fr')
  }
}
