import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Categoria} from "../shared/categoria.model";
import {MenuService} from "../shared/menu.service";
import {Observable} from "rxjs";
import {Dettaglio_menu} from "../shared/dettaglio_menu.model";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: Categoria;
  @Output() onRemoved = new EventEmitter();

  newNome: string = "aaa";
  newPrezzo: number = 0;

  addDettaglioMenu(nome: string, prezzo: number){
    let dett_menu: Dettaglio_menu = new Dettaglio_menu(111, nome, nome, this.categoria.id, this.categoria.id_menu, prezzo);

    this.menuService.addDettaglioMenu(dett_menu);
    console.log("nuova voce per la categoria " + this.categoria.nome + ": " + nome + " costo " + prezzo + " id_menu: " + this.categoria.id_menu);
  }

  removeCategoria(){
    this.menuService.removeCategoria(this.categoria.id_menu, this.categoria.id)
      .subscribe(
        data => {
          // refresh the list
          //this.getFoods();
          // this.menuService.getMenu()
          // .subscribe(res => this.menu = res);
          this.onRemoved.emit();

          return true;
        },
        error => {
          console.error("Error deleting food!");
          return Observable.throw(error);
        }

      );

    console.log("categoria_id:" + this.categoria.id + " cancellata (categoria.id_menu: " + this.categoria.id_menu);
  }

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
