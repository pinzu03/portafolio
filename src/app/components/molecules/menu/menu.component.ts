import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { toggleMenu } from 'src/app/state/actions/header.actions';

@Component({
  selector: 'app-m-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild('menuBox') menuBox!: ElementRef<HTMLElement>;
  @ViewChild('menuBackground') menuBackground!: ElementRef<HTMLElement>;

  constructor(private store: Store) {}

  toggleMenu() {

    this.menuBox.nativeElement.classList.add('m-menu__box--closed')
    this.menuBackground.nativeElement.classList.add('m-menu__background--closed')

    const timeoutId = setTimeout(() => {
      this.store.dispatch(toggleMenu())
      clearTimeout(timeoutId);
    }, 500)

  }

}
