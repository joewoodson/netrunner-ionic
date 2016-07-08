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

  constructor(private nav: NavController, public netrunnerDBService: NetrunnerDbService) {
    this.loadCard();
  }

  loadCard(){
    this.netrunnerDBService.load()
    .then(data => {
      this.card = data.data[0];
      console.log(this.card.cost);
    });

  }

}
