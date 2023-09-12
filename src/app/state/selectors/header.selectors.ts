import { createSelector } from '@ngrx/store';
import { AppState, Menu } from 'src/app/interfaces';

export const selectMenu = (state: AppState) => state.menu;

export const selectIsOpenMenu = createSelector(
  selectMenu,
  (state: Menu) => state.isOpenMenu
);
