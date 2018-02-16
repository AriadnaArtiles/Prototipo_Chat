import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = '';
  password: string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  loginUser() {
    if (/^[a-zA-Z0-9Ññ]+$/.test(this.username) && /^[a-zA-Z0-9Ññ]+$/.test(this.password)) {
      this.navCtrl.setRoot(ChatPage, {
        username: this.username,
        password: this.password
      });
    } else {
      this.showAlert('Error', 'Nombre de usuario o contraseña es incorrecta.');
    }
  }
}