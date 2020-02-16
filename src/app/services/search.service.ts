import {EventEmitter, Injectable} from '@angular/core';
import {SearchResult} from '../model/search-respons/search-result';
import {SearchRequestHandlingService} from './search-request-handling.service';
import {SEARCH_MOBILE_URL} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  responeseProductList = new EventEmitter<SearchResult>();

  constructor(private searchRequestHndle: SearchRequestHandlingService) {
  }

  search(param: any) {
    this.searchRequestHndle.sendRequest(param, SEARCH_MOBILE_URL).subscribe((response: SearchResult) => {
      this.responeseProductList.emit(response);
    });
  }
}
