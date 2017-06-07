import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilityService} from '../services/utility.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponent implements OnInit, AfterViewInit {

  private location: any;
  cities = [];

  constructor( private utilityService: UtilityService, private http: Http) { }

  ngAfterViewInit(): void {
    this.getWeatherForCity('Abuja').then(
      (data: any) => {
        const city = data.query.results.channel.item.condition;
        city.name = data.query.results.channel.location.city;
        this.cities.push(city);
      }
    );

    this.getWeatherForCity('Lagos').then(
      (data: any) => {
        const city = data.query.results.channel.item.condition;
        city.name = data.query.results.channel.location.city;
        this.cities.push(city);
      }
    );
  }

  ngOnInit() {
    this.utilityService.getLocation().subscribe((location) => {
      this.location = location;
    });
  }

  getWeatherForCity(city: string) {
    return this.getWeather(city);
  }


  getWeather(city: string = 'Abuja'){
    const url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast 
                  where woeid in (select woeid from geo.places(1) 
                  where text='${city}')&format=json`;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();


      xhr.onreadystatechange = () => {
        {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
            } else {
              reject(xhr.response);
            }
          }
        }
      }

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round(event.loaded / event.total * 100);

          console.log('progress:');
          console.log(event.loaded);
        }
      };

      xhr.open('get', url, true);
      xhr.send();
    });

  }
}
