import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profile: any;
  repos: any;
  username = 'Kariuki62';

  constructor(private searchService: SearchService) { }


  ngOnInit() {
  }

}
