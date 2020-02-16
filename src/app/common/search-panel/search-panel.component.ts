import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {SearchResult} from '../../model/search-respons/search-result';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  searchPanelForm: FormGroup;
  category: [];

  constructor(private productSearchService: SearchService, private router: Router) {
  }

  ngOnInit() {
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

}

