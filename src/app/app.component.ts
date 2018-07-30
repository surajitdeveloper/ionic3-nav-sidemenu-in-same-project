import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page1Page } from "../pages/page1/page1";
import { Page2Page } from "../pages/page2/page2";
import { Page3Page } from "../pages/page3/page3";
//import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from "../pages/home/home";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage:any = TabsPage;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}> = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private events: Events) {

      
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.events.subscribe('page',(data)=>{ 
      console.log(data);
      console.log(typeof data);
      console.log(this.pages)
      if(data == "home")
      {
        console.log("this is Home");
        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'Page1', component: Page1Page },
          { title: 'Page4', component: Page3Page } 
        ];
      }
      else
      {
        console.log("this is page");
        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'Page1', component: Page1Page },
          { title: 'Page2', component: Page2Page }
        ];
      }
     })
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}