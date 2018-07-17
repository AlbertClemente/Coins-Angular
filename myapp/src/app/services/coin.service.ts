import { Injectable } from '@angular/core';
import { Coin } from '../models/coin';
import { of } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private _coin : Coin;
  constructor() {
    this._coin = new Coin();
   }
  getCoin():Coin{
    return this._coin;
  }
  
  getCoinRest():Promise<Coin>{
    return of(this._coin).toPromise();
  }
}

