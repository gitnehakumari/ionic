import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MagicDataProvider } from '../../providers/magic-data/magic-data';
import { NotinterviewPage } from '../notinterview/notinterview';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public magic: MagicDataProvider) {

  }
  onSubmit(value: any){
    console.log("checking",value.user_name);
    this.magic.user_name = value.user_name;

    console.log("checking",value.mobile_no);
    this.magic.mobile_no = value.mobile_no;

    console.log("checking",value.email_id);
    this.magic.email_id = value.email_id;

    console.log("checking",value.rating);
    this.magic.rating = value.rating;
    this.magic. getratings().subscribe(
      response => {
        console.log(response);
       this.navCtrl.push(NotinterviewPage); 
 
      });


  }
}
