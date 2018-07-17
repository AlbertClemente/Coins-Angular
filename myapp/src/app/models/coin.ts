export class Coin{
    private _value : number;

    constructor(){
        this.flipCoin();
    }

    public flipCoin() : void{
        this._value = Math.floor(Math.random() * 2);
    }

    get value() : number{
        return this._value;
    }
}