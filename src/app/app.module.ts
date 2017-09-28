import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InfoPage } from '../pages/info/info';
import { MapPage } from '../pages/map/map';
import { CommentPage } from '../pages/comment/comment';
import { HttpProvider } from '../providers/http/http';
import { HttpModule } from '@angular/http'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InfoPage,
    MapPage,
    CommentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InfoPage,
    MapPage,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     Geolocation,
     CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
