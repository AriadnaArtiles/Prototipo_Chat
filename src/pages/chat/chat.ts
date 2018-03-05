import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild("content") content: Content;
  username: string = '';
  password: string = '';
  message: string = '';
  messages = [];
  offStatus: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.username = this.navParams.get('username');
    this.password = this.navParams.get('password');
    this.getMessages();

    // joinData.set({
    //   sendDate: Date()
    // })
    //this.getMessages();
  }

  getMessages() {
    let messagesRef = firebase.database().ref().child("chat");
    messagesRef.on("value", (snap) => {
      let data = snap.val();
      this.messages = [];
      for (let key in data) {
        this.messages.push(data[key]);
      }
      this.scrollToBottom();
    })
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.offStatus === false) {
        this.content.scrollToBottom(300);
      }
    }, 1000
    );
  }

  sendMessages() {
    let messagesRef = firebase.database().ref().child("chat");
    if (this.message != "") {
      messagesRef.push({ message: this.message, username: this.username, password: this.password, sendDate: Date() });
      this.message = "";
    } else {
      this.showAlert('Error', 'No hay mensaje, debe escribir algo.');
    }
  }

  showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}