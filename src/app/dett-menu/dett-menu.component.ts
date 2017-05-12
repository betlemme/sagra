import {Component, OnInit, Input} from '@angular/core';
import {Dettaglio_menu} from "../shared/dettaglio_menu.model";

@Component({
  selector: 'app-dett-menu',
  templateUrl: './dett-menu.component.html',
  styleUrls: ['./dett-menu.component.css']
})
export class DettMenuComponent implements OnInit {

  @Input() dett_menu: Dettaglio_menu;

  constructor() { }

  ngOnInit() {
  }

}
