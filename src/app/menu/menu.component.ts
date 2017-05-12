import { Component, OnInit } from '@angular/core';
import {MenuService} from "../shared/menu.service";
import {Menu} from "../shared/menu.model";
import {Categoria} from "../shared/categoria.model";
import {Dettaglio_menu} from "../shared/dettaglio_menu.model";
import {CategoriaJSON} from "../shared/categoriaJSON.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private dett_menu: Dettaglio_menu = new Dettaglio_menu(111,"dett","dett2",111,111,10);
  private categoria: Categoria = new Categoria(22,22,"cat",[this.dett_menu]);

  private menu: Menu = new Menu(33,[this.categoria],"menutmp");

  addCategoria(categoriaName: string, id_menu: number){
    let newCategoria: CategoriaJSON = new CategoriaJSON(/*this.menu.id,*/ categoriaName);
    console.log(newCategoria.nome);
    console.log(id_menu);
    //invoco menuservice addcategoria
    this.menuService.addCategoria(newCategoria, id_menu)
      .subscribe(
        data => {
          // refresh the list
          //this.getFoods();
          this.menuService.getMenu()
            .subscribe(res => this.menu = res);

          return true;
        },
        error => {
          console.error("Error saving food!");
          return Observable.throw(error);
        }

      );

  }

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu()
      .subscribe(res => this.menu = res);
  }

}
