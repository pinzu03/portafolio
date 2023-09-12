import { createReducer, on } from '@ngrx/store';
import { toggleMenu } from '../actions/header.actions';
import { Menu } from 'src/app/core/interfaces';

export const initialState: Menu = {
  isOpenMenu: false
};

export const menuReducer = createReducer(
  initialState,
  on(toggleMenu, (state, { isOpen }) => ({...state, isOpenMenu: isOpen}))
);
