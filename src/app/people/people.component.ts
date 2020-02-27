import { Component, OnInit } from '@angular/core';
import { person } from '../person';
import { PEOPLE } from '../mock-people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people = PEOPLE;

  constructor() { }

  ngOnInit() {
  }

  selectedperson: person;
  onSelect(person: person): void {
    this.selectedperson = person;
}

}