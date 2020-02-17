import { Component, OnInit } from '@angular/core';
import {SearchResult} from '../../model/search-respons/search-result';

@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css']
})
export class FavoritsComponent implements OnInit {
  favorite: SearchResult;
  constructor() { }

  ngOnInit() {

  }

}
