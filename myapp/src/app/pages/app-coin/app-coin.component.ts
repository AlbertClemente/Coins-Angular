import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';
import { Coin } from '../../models/coin';

@Component({
  selector: 'app-coin',
  templateUrl: './app-coin.component.html',
  styleUrls: ['./app-coin.component.css']
})
export class AppCoinComponent implements OnInit {
  coin:Coin;
  constructor(private service:CoinService) { }

  ngOnInit() {
    this.coin = this.service.getCoin();
  }

}
