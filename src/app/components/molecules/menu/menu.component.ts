import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-m-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild('menuBox') menuBox!: ElementRef<HTMLElement>;
  @ViewChild('menuBackground') menuBackground!: ElementRef<HTMLElement>;

  constructor(private menuService: MenuService) {}

  toggleMenu() {

    this.menuBox.nativeElement.classList.add('m-menu__box--closed')
    this.menuBackground.nativeElement.classList.add('m-menu__background--closed')

    const timeoutId = setTimeout(() => {
      this.menuService.toggleMenu(false);
      clearTimeout(timeoutId);
    }, 500)

  }

}
