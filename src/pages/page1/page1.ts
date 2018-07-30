import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events  } from 'ionic-angular';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
    console.log("page1 page");
    
    this.events.publish('page', 'page1');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}
