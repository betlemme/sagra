import {Component, OnInit, Input} from '@angular/core';
import {Categoria} from "../shared/categoria.model";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: Categoria;

  newNome: string = "asd";
  newPrezzo: number = 0;

  addDettaglioMenu(nome: string, prezzo: number){
    console.log("nuova voce per la categoria " + this.categoria.nome + ": " + nome + " costo " + prezzo);
  }

  constructor() { }

  ngOnInit() {
  }

}
