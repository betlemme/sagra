import {Person} from "./person.model";
import {Http, Response} from "@angular/http";

//import {Observable} from "rxjs";
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";

@Injectable()
export class PersonService{

  private myUrl = "http://localhost:8080/person";

  private persons: Person[] = [
    //{id: 1, name: "alberto", adress: "adr1"},
    //{id: 2, name: "filippo", adress: "adr2"},
    //{id: 3, name: "gabriella", adress: "adr3"},
  ];

  getPersons(){
    //return this.persons;
    return this._http.get(this.myUrl)
      .map((response: Response) => response.json());
  }
/*
  getHeroes(): Observable<Person[]> {
    return this.http.get(this.myUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
*/
  constructor (private _http: Http) {}
}
