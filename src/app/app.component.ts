import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCnADnymSPD7GwUMHtGSOeNk0ugudDQ__Y",
  authDomain: "prototipochat.firebaseapp.com",
  databaseURL: "https://prototipochat.firebaseio.com",
  projectId: "prototipochat",
  storageBucket: "prototipochat.appspot.com",
  messagingSenderId: "35176155807"
};

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

