import { createAction, props } from '@ngrx/store';

export const toggleMenu = createAction(
  '[Home page - Header] Toggle menu',
  props<{ isOpen: boolean }>()
);
