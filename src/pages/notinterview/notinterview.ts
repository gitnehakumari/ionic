import { Component } from '@angular/core';
import { MagicDataProvider } from '../../providers/magic-data/magic-data';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotinterviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notinterview',
  templateUrl: 'notinterview.html',
})
export class NotinterviewPage {

  searchTerm : any;
  public duplicate = new Array();
  public items = new Array();
    constructor(public navCtrl: NavController,
       public navParams: NavParams,
        public magic: MagicDataProvider)
         {
          this.magic.getRating()
          .subscribe(
               response => {
               console.log(response);
              this.items = response;
              this.duplicate = this.items;
              }
            );
      
  
    }
    filterItems(searchTerm){
   
      return this.items.filter((item) => {
          return item.user_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });    
  
  }
  
  
  
  
  
  clear() {
  
    console.log("calling");
   
      this.items = this.duplicate;
  
  }
   setFilteredItems(){
   
    this.items = this.filterItems(this.searchTerm);
  
  }
    ionViewDidLoad() {
      this.setFilteredItems();
     
  
      console.log('ionViewDidLoad NothomePage');
    }
  
  
  }