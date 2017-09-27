import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpProvider} from '../../providers/http/http'
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})


export class ListPage {

  shopList =[]

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public httpprovider: HttpProvider) {}

 ionViewDidLoad() {
 this.httpprovider.getShop()
  	.subscribe(
    	data => {
      		console.log(data)
      		this.shopList = data;
    	},

    	err => {
      	console.log(err);
    	},

    	()=>{
      	console.log('everything is done!!!')
    	}

   	);
 }

 itemTapped(shop){
  	this.navCtrl.push(InfoPage, {shop:shop});
 }


}
