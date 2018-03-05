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
    selector: 'page-contactos',
    templateUrl: 'contactos.html',
})
export class ContactosPage {


    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {


    }
}