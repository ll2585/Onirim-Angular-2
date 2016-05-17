

export class Card{
    constructor(public type: string, public name: string) {
        this.type = type;
    }
}

export class ColorCard extends Card {
    constructor(public type: string, public name: string, public color: string){
        super(type, name);
    }
}


export class LocationCard extends ColorCard {
    constructor(public type: string, public name: string, public color: string, public symbol: string){
        super(type, name, color);
    }
}

export class DoorCard extends ColorCard {
    constructor(public type: string, public name: string, public color: string){
        super(type, name, color);
    }
}

export class DreamCard extends Card {
    constructor(public type: string, public name: string){
        super(type, name);
    }
}