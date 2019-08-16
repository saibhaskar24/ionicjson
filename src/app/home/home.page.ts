import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items : any;
  constructor(public http: HttpClient) {
    this.getData();
  }


  getData() {
    let url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      console.log(result);
      this.items = result;
    });
  }
}
