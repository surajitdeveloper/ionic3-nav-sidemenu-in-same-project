import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Tabs } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('tabs') tabRef: Tabs

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Page1Page;
  tab5Root = Page2Page;
  tab6Root = Page3Page;
  
  constructor(private nav: NavController) {

    console.log("tabs page");
  }
  ionViewDidEnter() {
    // Now you can use the tabs reference
    console.log("a = ", this.tabRef);
 }
  getSelectedIndex()
  {
    //this.nav.parent.t.select(tab);
    //console.log("tab change");

    this.tabRef.select(1);
  }
}
