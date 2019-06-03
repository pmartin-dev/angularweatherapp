import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date = new Date();
  weather: Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getWeather().subscribe(data =>{
      this.weather = data
      console.log(this.weather)
    })
  }

}
