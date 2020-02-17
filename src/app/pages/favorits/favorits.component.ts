import {Component, OnInit} from '@angular/core';
import {SearchResult} from '../../model/search-respons/search-result';
import {FavoriteService} from '../../services/favorite.service';
import {CookieService} from 'ngx-cookie-service';
import {GET_FAVORITE_URL} from '../../constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css']
})
export class FavoritsComponent implements OnInit {
  favorite: SearchResult;

  constructor(private favoriteService: FavoriteService, private cookieService: CookieService, private route: Router) {
  }

  ngOnInit() {
    if (this.cookieService.get('user')) {
      let user = this.cookieService.get('user');
      this.favoriteService.get(GET_FAVORITE_URL, user).subscribe((searchResult: SearchResult) => {
        console.log(searchResult.result);
        this.favorite = searchResult.result;
      });
    } else {
      this.route.navigate(['login']);
    }
  }

}
