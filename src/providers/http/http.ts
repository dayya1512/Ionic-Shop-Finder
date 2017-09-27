import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  	constructor(public http: Http) {
    	console.log('Hello HttpProvider Provider');
 	}

	getShop(){
  		return this.http.get("https://ishop2-daya.herokuapp.com/shops")
  		.map(res => res.json());
	}

}
