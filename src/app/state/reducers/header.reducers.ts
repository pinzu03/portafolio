import { createReducer, on } from '@ngrx/store';
import { toggleMenu } from '../actions/header.actions';
import { Menu } from 'src/app/interfaces';

export const initialState: Menu = {
  isOpenMenu: false
};

export const menuReducer = createReducer(
  initialState,
  on(toggleMenu, (state) => ({...state, isOpenMenu: !state.isOpenMenu}))
);
