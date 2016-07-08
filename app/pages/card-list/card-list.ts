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
  public card: any;
  private cardId: any;

  constructor(private nav: NavController, public netrunnerDBService: NetrunnerDbService) {

  }

  loadCard(cardId){
    this.netrunnerDBService.load(cardId)
    .then(data => {
      this.card = data.data[0];
      this.card.img = `https://netrunnerdb.com/card_image/${this.card.code}.png`
    });

  }

  searchCardDB(event){
    if (event.target.value.length > 2) {
      this.loadCard(event.target.value);
    }
  }

}
