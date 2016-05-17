import {Component, OnInit} from 'angular2/core';
import {Card} from "./onirim/onirim-game/onirim-cards";

@Component({
    selector: 'my-app',
    template: `
        {{card.type}}
    `
})
export class OnirimAppComponent implements OnInit {
    card: Card;

    constructor() {

    }
    ngOnInit():any {
        this.card = new Card("red", "white");
    }
}