import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../model/search-respons/product';

@Component({
  selector: 'app-mobile-price-card',
  templateUrl: './mobile-price-card.component.html',
  styleUrls: ['./mobile-price-card.component.css']
})
export class MobilePriceCardComponent implements OnInit {

  @Input()
  item: any;

  constructor() { }

  ngOnInit() {
  }

}
