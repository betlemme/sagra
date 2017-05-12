import { Component, OnInit } from '@angular/core';
import {CollectableService} from "../shared/collectable.service";
import {Collectable} from "../shared/collectable.model";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  collectables = [];

  onAddToCollection(item: Collectable){
    //alert("hello!");
    this.collectableService.addToCollection(item);
  }
  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

}
