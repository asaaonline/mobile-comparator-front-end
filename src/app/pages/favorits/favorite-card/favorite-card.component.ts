import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../model/search-respons/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.css']
})
export class FavoriteCardComponent implements OnInit {

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
