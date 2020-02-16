import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SearchResult} from '../../model/search-respons/search-result';
import {PhoneService} from '../../services/phone.service';

@Component({
  selector: 'app-single-item-view',
  templateUrl: './single-item-view.component.html',
  styleUrls: ['./single-item-view.component.css']
})
export class SingleItemViewComponent implements OnInit {

  result: SearchResult;

  constructor(private activatedRoute: ActivatedRoute, private  phoneService: PhoneService) {
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.phoneService.getPhoneDetails(params['item_id']);
    });

    this.phoneService.responeseShopPriceList.subscribe((searchResult: SearchResult) => {
      console.log(searchResult.result);
      this.result = searchResult.result;

    });

  }


}
