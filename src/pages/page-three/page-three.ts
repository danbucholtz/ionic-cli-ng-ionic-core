import { Component } from '@angular/core';

@Component({
  selector: 'page-taco-three',
  template: `
<ion-page>
  <ion-header>
    <ion-navbar>
      <ion-title>Page Three</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    Page Three
    <div>
      <ion-button (click)="back()">Go Back</ion-button>
    </div>
    <ul>
      <li>ngOnInit - {{ngOnInitDetection}}</li>
      <li>ionViewWillEnter - {{ionViewWillEnterDetection}}</li>
      <li>ionViewDidEnter - {{ionViewDidEnterDetection}}</li>
    </ul>
  </ion-content>
</ion-page>
  `
})
export class PageThree {

  ngOnInitDetection: string = 'initial';
  ionViewWillEnterDetection: string = 'initial';
  ionViewDidEnterDetection: string = 'initial';

  constructor() {

  }


  ngOnInit() {
    setInterval(() => {
      this.ngOnInitDetection = '' + Date.now();
    }, 500);
  }

  ionViewWillEnter() {
    setInterval(() => {
      this.ionViewWillEnterDetection = '' + Date.now();
    }, 500);
  }

  ionViewDidEnter() {
    setInterval(() => {
      this.ionViewDidEnterDetection = '' + Date.now();
    }, 500);
  }

  back() {
    const nav = document.querySelector('ion-nav') as any;
    nav.pop();
  }
}
