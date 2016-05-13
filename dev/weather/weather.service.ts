import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx';
import {WeatherItem} from "./weather-item";
@Injectable()

export class WeatherService
{
    constructor(private _http: Http) {}

    getWeatherItems() {
        return WEATHER_ITEMS;
    }

    searchWeatherData(cityName: string): Observable<any>{
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
            '&APPID=1db27cf4531c0d9bf145b67189824d06&units=imperial')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
            });
    }

    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }
    
    clearWeatherItems(){
        WEATHER_ITEMS.splice(0);
    }
}