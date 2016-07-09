import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CardDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/card-detail/card-detail.html',
})
export class CardDetailPage {

  private card: {};

  constructor(private nav: NavController, private params: NavParams) {
  	this.card = params.get('card');
  }

}
