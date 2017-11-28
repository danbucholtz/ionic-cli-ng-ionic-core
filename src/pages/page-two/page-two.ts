import { Component } from '@angular/core';

import { PageThree } from '../page-three/page-three';

@Component({
  selector: 'page-taco-two',
  template: `
<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>Page Two</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    Page Two
    <div>
      <ion-button (click)="next()">Go to Page Three</ion-button>
    </div>
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
export class PageTwo {

  ngOnInitDetection: string = 'initial';
  ionViewWillEnterDetection: string = 'initial';
  ionViewDidEnterDetection: string = 'initial';

  constructor() {

  }


  ngOnInit() {
    console.log('page two ngOnInit');
    setInterval(() => {
      this.ngOnInitDetection = '' + Date.now();
    }, 500);
  }

  ionViewWillEnter() {
    console.log('page two ionViewWillEnter');
    setInterval(() => {
      this.ionViewWillEnterDetection = '' + Date.now();
    }, 500);
  }

  ionViewDidEnter() {
    console.log('page two ionViewDidEnter');
    setInterval(() => {
      this.ionViewDidEnterDetection = '' + Date.now();
    }, 500);
  }

  next() {
    const nav = document.querySelector('ion-nav') as any;
    nav.push(PageThree);
  }

  back() {
    const nav = document.querySelector('ion-nav') as any;
    nav.pop().then(() => console.log('pop complete')).catch(err => console.log('err: ', err));
  }
}
