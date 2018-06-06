import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  @ViewChild(Slides) slides: Slides;

  slideChanged(type)
  {
    if(type == "banner"){ console.log("banner slider"); }else{ console.log("popular slider"); }
    let currentIndex = this.slides.getActiveIndex();
    console.log("Slides Changes, current slide is: "+currentIndex);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("page3 page");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
