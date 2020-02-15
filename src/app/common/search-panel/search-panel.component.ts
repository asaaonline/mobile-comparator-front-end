import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  searchPanelForm: FormGroup;

  constructor(private productSearchService: SearchService, private router: Router) {
  }

  ngOnInit() {
    this.searchPanelForm = new FormGroup({
      'searchKeyWord': new FormControl(null),
    })
  }

  onSubmit() {

      this.router.navigate(['search'], {queryParams: {searchKeyWord: this.searchPanelForm.value.searchKeyWord}, queryParamsHandling: 'merge'});


  }

}

