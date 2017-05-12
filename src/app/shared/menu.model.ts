import {Categoria} from "./categoria.model";
export class Menu{
  public id: number;
  public categorie: Categoria[];
  public name: string;

  constructor(id: number, categorie: Categoria[], name: string){
    this.id = id;
    this.categorie = categorie;
    this.name = name;
  }
}
