import { createAction, props } from '@ngrx/store';
import {PersonModel} from '../../../../models/person-model';

// This is a request
export const loadPeoples = createAction(
  '[People] Load Peoples'
);

// This is a load success
export const loadedPeople = createAction(
  '[People] Loaded',
  props<{ people: PersonModel[] }>()
)

export const updatePeople = createAction(
  '[People] Update People',
  props<{personId: number, person: PersonModel}>()
);




