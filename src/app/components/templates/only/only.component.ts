import { Component } from '@angular/core';

import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-t-only-template',
  templateUrl: './only.component.html',
  styleUrls: ['./only.component.scss']
})
export class OnlyTemplateComponent {

  constructor( private menuService: MenuService ) {}

  get isOpenMenu(): boolean {
    return this.menuService.isOpenMenu;
  }

}
