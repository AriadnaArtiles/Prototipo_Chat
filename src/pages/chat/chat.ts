import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.primeraVez = true;
    this.username = this.navParams.get('username');
    this.password = this.navParams.get('password');
    this.getMessages();
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
    let contentEnd = document.getElementById("content-end").offsetTop;
    this.content.scrollTo(0, contentEnd, 1000);
  }

  sendMessages() {
    let messagesRef = firebase.database().ref().child("chat");
    messagesRef.push({ message: this.message, username: this.username, password: this.password });
    this.message = "";
  }

  // goback() {
  //   this.navCtrl.push(HomePage);
  // }

}