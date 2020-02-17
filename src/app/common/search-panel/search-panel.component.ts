import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {SearchResult} from '../../model/search-respons/search-result';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit, DoCheck {
  searchPanelForm: FormGroup;
  category: [];

  logedIn: boolean;

  constructor(private productSearchService: SearchService, private router: Router, private cookieService: CookieService) {
  }

  ngDoCheck() {
    if (this.cookieService.check('user')) {
      this.logedIn = true;
    } else {
      this.logedIn = false;
    }

  }


  ngOnInit() {


    console.log('user is', this.cookieService.get('user'));
    if (this.cookieService.check('user')) {
      this.logedIn = true;
    } else {
      this.logedIn = false;
    }

    this.searchPanelForm = new FormGroup({
      'searchKeyWord': new FormControl(''),
    });

    this.productSearchService.getCategories().subscribe((response: SearchResult) => {
      console.log('category', response.result[0].brandName);
      this.category = response.result;
    });


  }

  onSubmit() {

    this.router.navigate(['search'], {queryParams: {searchKeyWord: this.searchPanelForm.value.searchKeyWord}});


  }

  logOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['']);
  }
}

