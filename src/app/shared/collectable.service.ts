import {Collectable} from "./collectable.model";

export class CollectableService{

  private collectables: Collectable[] = [
    {description : "desc1", type : "book"},
    {description : "desc2", type : "book2"}
  ];

  private collection: Collectable[] = [];

  getCollectables(){
    return this.collectables;
  }

  getCollection(){
    return this.collection;
  }

  addToCollection(item: Collectable){
    if(this.collection.indexOf(item) !== -1){
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item: Collectable){
    this.collection.splice(this.collection.lastIndexOf(item), 1);
  }

}
