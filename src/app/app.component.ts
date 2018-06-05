import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page1Page } from "../pages/page1/page1";
import { Page2Page } from "../pages/page2/page2";
import { Page3Page } from "../pages/page3/page3";
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  //rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
      this.pages = [
        { title: 'Home', component: TabsPage },
        { title: 'Page1', component: Page1Page },
        { title: 'Page2', component: Page2Page },
        { title: 'Page4', component: Page3Page } 
      ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}