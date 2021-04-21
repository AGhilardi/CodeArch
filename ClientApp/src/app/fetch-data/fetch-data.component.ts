import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public titles: Title[];
  public test :string = "test";
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Title[]>(baseUrl + 'title').subscribe(result => {
      this.titles = result;
      this.titles.forEach(element => {
        console.log(element)
      });
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface Title {
  title:string;
}
