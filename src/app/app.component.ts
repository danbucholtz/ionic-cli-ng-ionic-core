import { Component, ElementRef, ViewChild } from '@angular/core';

import { HomePage } from '../pages/home/home';
@Component({
  selector: 'ng-start',
  template: `
  <ion-app>
    <ion-nav-controller></ion-nav-controller>
    <ion-nav #nav></ion-nav>
  </ion-app>
  `
})
export class MyApp {

  @ViewChild('nav', { read: ElementRef}) navElementRef: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    hydrateNav(this.navElementRef.nativeElement).then(() => {
      this.navElementRef.nativeElement.setRoot(HomePage);
    });
  }
}

function hydrateNav(element: any) {
  return new Promise((resolve, reject) => {
    element.componentOnReady(() => {
      setTimeout(() => {
        resolve();
      }, 1);
    });
  });
}