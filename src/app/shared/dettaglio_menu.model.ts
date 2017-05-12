export class Dettaglio_menu{
  private id: number;
  private nome: string;
  private nome_app: string;
  private id_categoria: number;
  private id_menu: number;
  private prezzo: number;

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
