import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      // this.request.searchKeyWord = params['searchKeyWord'];
      // this.request.endPrice = params['endPrice'];
      // this.request.itemPerPage = params['itemPerPage'];
      // this.request.startPrice = params['startPrice'];
      // this.request.sortBy = params['sortBy'];
      // this.productSearchService.search(this.request);
    });

  }

}
