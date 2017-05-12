import { Component, OnInit } from '@angular/core';
import {PersonService} from "../shared/person.service";
import {Person} from "../shared/person.model";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    //this.persons = this.personService.getPersons();
    this.personService.getPersons()
      .subscribe(res => this.persons = res);
  }

}
