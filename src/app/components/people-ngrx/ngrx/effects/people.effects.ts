import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import {PeopleService} from '../../../../services/people.service';
import * as PeopleActions from '../actions/people.actions';
import {loadedPeople} from '../actions/people.actions';


@Injectable()
export class PeopleEffects {


  loadPeoples$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.loadPeoples),
      // TODO Implement a Load People Action that gets the data from the service.
      mergeMap(() => this.peopleService.getPeople()
        .pipe(
          map((people) => loadedPeople({people})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updatePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.updatePeople),
      mergeMap(({personId, person}) => this.peopleService.updatePeople(personId, person)
        .pipe(
          map((people) => loadedPeople({people})),
          catchError(() => EMPTY)
        )
      )
    )
  );


  constructor(private actions$: Actions, private peopleService: PeopleService) {}

}
