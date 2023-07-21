import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
import { loadPeoples, updatePeople } from './ngrx/actions/people.actions';
import { selectPeople } from './ngrx/selectors/people.selectors';
import {PersonModel} from '../../models/person-model';

@Component({
  selector: 'app-people-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {
  personIds: Array<number> = [];
  selectedPeople: Object = {};
  // TODO: Include the Store and get the data from the NgrxStore
  constructor(private store: Store) { }
  people$ = this.store.pipe(select(selectPeople));

  ngOnInit() {
    this.store.dispatch(loadPeoples());
  }

  selectPerson(index: number, person: PersonModel) {
    if (!this.personIds.includes(index)) {
      this.personIds.push(index);
      this.selectedPeople[index] = { ...person };
      console.log(this.selectedPeople);
    }
  }

  deselectPerson(index: number, person: PersonModel) {
    if (this.personIds.includes(index)) {
      this.personIds = this.personIds.filter(id => id != index);
      delete this.selectedPeople[index];
    }
  }

  updatePerson(index: number, person: PersonModel) {
    this.store.dispatch(updatePeople({personId: index, person}));
    this.deselectPerson(index, person);
  }

}
