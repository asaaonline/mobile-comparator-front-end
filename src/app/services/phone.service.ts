import {EventEmitter, Injectable} from '@angular/core';
import {SearchResult} from '../model/search-respons/search-result';
import {PhoneRequestHandlingService} from './phone-request-handling.service';
import {SINGLE_MOBILE_GET_URL} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {


  responeseShopPriceList = new EventEmitter<SearchResult>();

  constructor(private phoneRequestHandling: PhoneRequestHandlingService) {
  }

  getPhoneDetails(id: any) {
    this.phoneRequestHandling.sendRequest(id, SINGLE_MOBILE_GET_URL).subscribe((response: SearchResult) => {
      this.responeseShopPriceList.emit(response);
    });

  }
}
