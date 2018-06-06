import { Component, Input } from '@angular/core';
/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  @Input('page') page: string;

  text: string;

  constructor() {
    console.log('Hello TabsComponent Component');
    this.text = 'Hello World';
  }
  ionViewWillEnter()
  {
    console.log("tab");
    console.log(this.page);
  }

}
