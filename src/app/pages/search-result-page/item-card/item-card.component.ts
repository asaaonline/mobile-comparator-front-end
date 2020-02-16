import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../model/search-respons/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input()
  item: Product;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(id: number) {

    this.router.navigate(['item'], {queryParams: {item_id: id}});


  }
}
