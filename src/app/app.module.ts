import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyApp } from './app.component';

import { AngularNav } from '../components/nav/nav';

import { HomePage } from '../pages/home/home';
import { PageTwo } from '../pages/page-two/page-two';
import { PageThree } from '../pages/page-three/page-three';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PageTwo,
    PageThree,



    AngularNav,
  ],
  imports: [
    BrowserModule,
    // IonicModule.forRoot(MyApp)
  ],
  bootstrap: [MyApp],
  entryComponents: [
    MyApp,
    HomePage,
    PageTwo,
    PageThree
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
