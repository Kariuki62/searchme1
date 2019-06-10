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

  constructor(private searchService: SearchService) {
   }
  findProfile() {
  this.searchService.updateProfile(this.username);
  this.searchService.getUserInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });
  this.searchService.getReposInfo().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  });
}

  ngOnInit() {
    this.findProfile();
  }

}
