import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
    console.log(card.title);
    this.nav.push(CardDetailPage, { card });
  }

  onPageWillEnter(){
    this.loadCards();
  }

  logout(){
    this.auth.logout();
    this.nav.push(ProfilePage);
    this.nav.pop(CardListPage);
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
