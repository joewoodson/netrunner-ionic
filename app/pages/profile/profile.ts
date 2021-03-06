import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth';
import { CardListPage } from '../card-list/card-list';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {

  constructor(private nav: NavController, private auth: AuthService) {
  	this.auth.lock.on("signin success", (nav) => {
  		this.nav.push(CardListPage);
  		this.nav.pop(ProfilePage);
  	})
  }

}
