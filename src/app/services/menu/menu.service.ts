import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private _isOpenMenu: boolean = false;


  get isOpenMenu(): boolean {
    return this._isOpenMenu;
  }

  toggleMenu(isOpenMenu: boolean): void {
    this._isOpenMenu = isOpenMenu;
  }

}
