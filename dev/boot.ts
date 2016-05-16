/// <reference path="../typings/browser.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from "angular2/http";
import {WeatherService} from "./weather/weather.service";
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, WeatherService]);
