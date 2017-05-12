import {Dettaglio_menu} from "./dettaglio_menu.model";
export class Categoria{
  public id: number;
  public id_menu: number;
  public nome: string;
  public dettaglioMenuList: Dettaglio_menu[];

  constructor(id: number, id_menu: number, nome: string, dettaglioMenuList: Dettaglio_menu[]){
    this.id = id;
    this.id_menu = id_menu;
    this.nome = nome;
    this.dettaglioMenuList = dettaglioMenuList;
  }
}
