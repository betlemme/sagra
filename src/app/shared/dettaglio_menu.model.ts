export class Dettaglio_menu{
  public id: number;
  public nome: string;
  public nome_app: string;
  public id_categoria: number;
  public id_menu: number;
  public prezzo: number;

  constructor(id: number,nome: string,nome_app: string, id_categoria: number,
              id_menu: number, prezzo: number){
    this.id = id;
    this.nome = nome;
    this.nome_app = nome_app;
    this.id_categoria = id_categoria;
    this.id_menu = id_menu;
    this.prezzo = prezzo;
  }

}
