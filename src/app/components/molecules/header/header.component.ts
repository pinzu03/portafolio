import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';

@Component({
  selector: 'app-m-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private menuService: MenuService) {}


  toggleMenu(): void {
    this.menuService.toggleMenu(true);
  }

}
