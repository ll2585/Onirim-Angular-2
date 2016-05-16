import {Component} from 'angular2/core';

import {WeatherAppComponent} from "./weather.app.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {OnirimAppComponent} from "./onirim.app.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Onirim']">Onirim</a>
                <a [routerLink]="['Weather']">Weather</a>
            </nav>
        </header>
        <div class = "main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [OnirimAppComponent, WeatherAppComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/onirim', name: 'Onirim', component: OnirimAppComponent, useAsDefault: true},
    {path: '/weather', name: 'Weather', component: WeatherAppComponent}
])
export class AppComponent {
}