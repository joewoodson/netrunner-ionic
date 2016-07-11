import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage, SqlStorage} from 'ionic-angular';
import { NetrunnerDbService} from '../../providers/netrunner-db-service/netrunner-db-service';
import { AuthService } from '../../providers/auth/auth';
import { CardDetailPage } from '../card-detail/card-detail';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'build/pages/card-list/card-list.html',
  providers: [NetrunnerDbService]
})
export class CardListPage {
  private cards: any;
  private packCode: any;
  private matchingCards: any;
  private matchesFound: boolean;
  private favorite: any; 
  sqlStorage: Storage = new Storage(SqlStorage);

  constructor(private nav: NavController, private netrunnerDBService: NetrunnerDbService, private auth: AuthService) {
    this.matchesFound = true;
  }

  loadCards(){
    this.netrunnerDBService.load()
    .then(data => {
      this.cards = data;
    });
  }

  searchPack(){
    this.matchingCards = this.cards.filter(card => card.pack_code === this.packCode.toLowerCase());
    this.matchesFound = (Object.keys(this.matchingCards).length == 0) ? false : true;
  }

  showCardDetail(card){
    this.nav.push(CardDetailPage, { card });
  }

  favorited(card){
    this.sqlStorage.set('favorite', JSON.stringify(card));
  }

  onPageWillEnter(){
    this.loadCards();
    this.sqlStorage.get('favorite').then(favorite => {
      this.favorite = JSON.parse(favorite);
    }).catch(error => {
      console.log(error);
    });
    console.log
  }

  logout(){
    this.auth.logout();
    this.nav.push(ProfilePage);
    console.log('logged out');
  }

  // searchCard(cardId){
  //   this.netrunnerDBService.load(cardId)
  //   .then(data => {
  //     this.card = data.data;
  //     console.log(this.card);
  //     this.card.img = `https://netrunnerdb.com/card_image/${this.card.code}.png`
  //   });
  // }

  // searchCardDB(event){
  //   if (event.target.value.length > 2) {
  //     this.loadCard(event.target.value);
  //   }
  // }

}
