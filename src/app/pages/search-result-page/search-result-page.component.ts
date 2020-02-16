import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {SearchResult} from '../../model/search-respons/search-result';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {

  searchResult: SearchResult;

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) {
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.searchService.search(params['searchKeyWord']);
    });


    this.searchService.responeseProductList.subscribe((searchResult: SearchResult) => {
      console.log(searchResult);
      this.searchResult = searchResult.result;

    });


  }


}
