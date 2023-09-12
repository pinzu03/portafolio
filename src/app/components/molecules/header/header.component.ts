import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { toggleMenu } from 'src/app/state/actions/header.actions';

@Component({
  selector: 'app-m-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store) {}

  toggleMenu(): void {
    this.store.dispatch(toggleMenu())
  }

}
