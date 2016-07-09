import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NetrunnerDbService} from '../../providers/netrunner-db-service/netrunner-db-service';

/*
  Generated class for the CardListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/card-list/card-list.html',
  providers: [NetrunnerDbService]
})
export class CardListPage {
  private cards: any;
  private packCode: any;
  private matchingCards: any;

  constructor(private nav: NavController, private netrunnerDBService: NetrunnerDbService) {
    this.loadCards();
  }

  loadCards(){
    this.netrunnerDBService.load()
    .then(data => {
      this.cards = data;
    });
  }

  searchDeck(){
    this.matchingCards = this.cards.filter(this.filterByPack.bind(this));
    console.log(this.matchingCards);
  }

  filterByPack(obj) {
    if ('pack_code' in obj && obj.pack_code === this.packCode) {
      return true;
    } else {
      return false;
    }
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
