import {Component, OnInit} from '@angular/core';
import {SearchResult} from '../../model/search-respons/search-result';
import {FavoriteService} from '../../services/favorite.service';

@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css']
})
export class FavoritsComponent implements OnInit {
  favorite: SearchResult;

  constructor(private favoriteService: FavoriteService) {
  }

  ngOnInit() {
this.favoriteService.get();
  }

}
