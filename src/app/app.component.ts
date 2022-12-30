import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  city:any;
  weatherData:any=[];
  loading:boolean=false
  constructor(private http: HttpClient){

  }
  ngOnInit(){
  }
  getForecast(){
    this.loading=true;
    this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=5613f3680a502bff3fe9021e145908cb`).subscribe(
      (res) => {
        this.loading=false;
       let temp:any=res;
      this.weatherData=temp?.list.slice(0,5);
      }
    )
  }
}
