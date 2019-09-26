import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 // public Token : string;
 public items : any ;


  //public items : any;
  constructor(public http: HttpClient) {
    this.getData();
    //this.sample();
  }

 /* sample() {
    this.Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTY4MTI5MjA3LCJqdGkiOiIyMzE0NjY4ZTU4NjI0MWI3ODExNjQzNzQ4NWFlNzEyMiIsInVzZXJfaWQiOjF9.MrIeBR-anpKsGs4ZlP2rcSQUsKunZlkvM2MksP0tbWY';
    let headers = new HttpHeaders();
    let turl = 'https://djangorestapiionic.herokuapp.com/users/';
    headers.append('Authorization', 'Bearer ' + this.Token);
    let data: Observable<any> = this.http.get(turl,{headers: headers});
      data.subscribe(result => {
      console.log(result);
    });
  } 
  */

  
  getData() {
    let url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
    //let turl = 'http://127.0.0.1:8000/users/';
    //let turl = 'https://djangorestapiionic.herokuapp.com/users';
    let data: Observable<any> = this.http.get(url);
     data.subscribe(result => {
      console.log(result);
      this.items = result;
    });
    
    /*let tdata: Observable<any> = this.http.get(turl);
    tdata.subscribe(result => {
      console.log(result);
    });
    */
  }

}
