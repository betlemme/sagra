import { Component, OnInit } from '@angular/core';
import {Collectable} from "../shared/collectable.model";
import {CollectableService} from "../shared/collectable.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collection: Collectable[] = [
    //{description : "desc tmp", type : "t tmp"}
  ];

  getCollection(){
    return this.collection;
  }

  removeFromCollection(item: Collectable){
    this.collectableService.removeFromCollection(item);
  }

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collection = this.collectableService.getCollection();
  }

}
