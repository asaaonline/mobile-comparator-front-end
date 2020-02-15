import {EventEmitter, Injectable} from '@angular/core';
import {SearchResult} from '../model/search-respons/search-result';
import {RequestHandlingService} from './request-handling.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  responeseProductList = new EventEmitter<SearchResult>();

  constructor(private requestHndle: RequestHandlingService) {
  }

  search(param: any) {
    this.requestHndle.sendRequest(param).subscribe((response: SearchResult) => {
      this.responeseProductList.emit(response);
    });
  }
}
