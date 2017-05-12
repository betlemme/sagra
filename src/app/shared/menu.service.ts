import {Menu} from "./menu.model";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Categoria} from "./categoria.model";
import {Observable} from "rxjs";
import {CategoriaJSON} from "./categoriaJSON.model";
/**
 * Created by enrico on 01/05/2017.
 */
@Injectable()
export class MenuService{

  private menuUrl = "http://localhost:8080/menu/1";

  private categUrl = "http://localhost:8080/menu/1/categoria";
  //private menuList: Menu[] = [];

  getMenu(){
    return this._http.get(this.menuUrl)
      .map((response: Response) => response.json());
  }

  addCategoria(categoria: CategoriaJSON, id_menu: number){
    let body = JSON.stringify(categoria);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = "http://localhost:8080/menu/" + id_menu + "/categoria";

    return this._http.post(url, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    //let body = res.json();
    let body;

    // check if empty, before call json
    if (res.text()) {
      body = res.json();
    }

    return body || {};
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

  constructor (private _http: Http) {}
}
