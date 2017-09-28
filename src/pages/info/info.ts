import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { CommentPage } from '../comment/comment';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  shopInfo =[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber,) {

  	 this.shopInfo =navParams.get('shop');
  }

  ionViewDidLoad() {
   console.log('ionViewDidLoad InfoPage');
  }

  itemTapped(){
  	this.navCtrl.push(MapPage);
  }

  launchDialer(n:string){
    this.callNumber.callNumber(n, true)
       .then(() => console.log('Launched dialer!'))
       .catch(() => console.log('Error launching dialer'));
  }


	commentTapped(){
  	this.navCtrl.push(CommentPage);
  }


}
