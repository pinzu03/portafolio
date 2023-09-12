import { ActionReducerMap } from "@ngrx/store";
import { Menu } from "../index";
import { menuReducer } from "src/app/state/reducers/header.reducers";

export interface AppState {
  menu: Menu;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  menu: menuReducer,
};
