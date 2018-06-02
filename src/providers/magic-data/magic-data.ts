import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the MagicDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MagicDataProvider {
 user_name: any;
 mobile_no: any;
 email_id: any;
 rating: any;
  constructor(public http: Http) {
    console.log('Hello MagicDataProvider Provider');
  }
  getratings() {
    return this.http.get('http://jantarmantarlive.com/neha.php',
  
      {
        params:
        {
  
          user_name: this.user_name,
          mobile_no: this.mobile_no,
          email_id: this.email_id,
          rating: this.rating,

        }
      }
  
    )
      .map(res => res.json());
  
  }


  getRating() {
    return this.http.get('http://jantarmantarlive.com/neha_read.php')
      .map(res => res.json());
  
  }
 
}
