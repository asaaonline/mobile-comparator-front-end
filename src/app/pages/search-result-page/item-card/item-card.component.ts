import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../model/search-respons/product';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input()
  item: Product;

  constructor() {
  }

  ngOnInit() {
  }
}
