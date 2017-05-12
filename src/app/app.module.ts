import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import {CollectableService} from "./shared/collectable.service";
import { PeopleComponent } from './people/people.component';
import {PersonService} from "./shared/person.service";
import { MenuComponent } from './menu/menu.component';
import {MenuService} from "./shared/menu.service";
import { DettMenuComponent } from './dett-menu/dett-menu.component';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    PeopleComponent,
    MenuComponent,
    DettMenuComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CollectableService, PersonService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
