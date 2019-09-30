import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nam : string;
  public Token : string;


  public items : any;
  constructor(public http: HttpClient, private storage: Storage) {
    //this.getData();
    this.nam = "default";
    this.tset();
    this.sample();
  }

  

  tset() {
    this.storage.set('name', 'Max');
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
      this.nam = val;
    });
  }


  sample() {
    this.Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTY5ODU1ODA4LCJqdGkiOiIwMzgxOWM1OTkwYjA0MzgxOGY3M2ZhNjgyYzFkYjJlYiIsInVzZXJfaWQiOjF9.tkCRPQWzaCQ8ni2AvlrCrg5DF6Pacmc4kjmz_hEd7jQ';
    let headers = {
      Authorization : 'Bearer ${this.Token}'
    };
    let turl = 'http://127.0.0.1:8000';
    
    let data: Observable<any> = this.http.get(turl,{headers});
      data.subscribe(result => {
      console.log(result);
    });
  }
  

   /* getData() {
    let turl = 'http://127.0.0.1:8000';
    let data: Observable<any> = this.http.get(url);
      data.subscribe(result => {
      console.log(result);
      this.items = result;
    });
    
    let tdata: Observable<any> = this.http.get(turl);
    tdata.subscribe(result => {
      console.log(result);
    });
  }
  */
}
