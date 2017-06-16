import { Component, OnInit } from '@angular/core';
import {ServiceComponent} from '../service/service.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = new Array();
  repos = new Array();
  username: String;

  constructor(private _githubService: ServiceComponent) {
    this.user = null;
  }

  searchUser(){
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getUser().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit() {
  }
}
