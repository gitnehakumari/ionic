import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import {NotinterviewPage} from '../pages/notinterview/notinterview'
import { HomePage } from '../pages/home/home';
import { MagicDataProvider } from '../providers/magic-data/magic-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotinterviewPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotinterviewPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MagicDataProvider
  ]
})
export class AppModule {}
