import {Adress} from "./adress.model";
export class Person{
  public id : number;
  public name : string;
  public adress : Adress;

  constructor(id: number, name: string, adress: Adress){
    this.id = id;
    this.name = name;
    this.adress = adress;
  }
}
