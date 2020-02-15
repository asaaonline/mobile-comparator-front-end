import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  searchPanelForm: FormGroup;


  ngOnInit() {

  }

  onSubmit() {

    // this.productSearchService.changeSearchKeyWord(this.searchPanelForm);
  }

}

