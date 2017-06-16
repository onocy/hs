import { Component, OnInit, Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

@Injectable()
export class ServiceComponent implements OnInit {
  private username: String
  private client_id: String = "3de8e1d9d68ed4e393a7";
  private client_secret: String = "51f82cad58fcb5b8148f1c2116821dbb8b078a3a";

  constructor(private _http: Http) {
    console.log('service ready');
    this.username = 'onocy';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json())
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json())
  }

  updateUser(username:String){
    this.username = username;
  }

  ngOnInit() {
  }

}
