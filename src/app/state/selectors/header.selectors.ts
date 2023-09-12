import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Menu } from 'src/app/interfaces';

const featureKey = "menu";

const selectMenu = createFeatureSelector<Menu>(featureKey);

export const selectIsOpenMenu = createSelector(
  selectMenu,
  (state: Menu) => state.isOpenMenu
);
