import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { toggleMenu } from 'src/app/state/actions/header.actions';

@Component({
  selector: 'app-m-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobile: boolean = false;

  constructor(private store: Store) {}

  toggleMenu(): void {
    this.store.dispatch(toggleMenu())
  }

  @HostListener('window:resize')
  onResize() {
    this.checkResolution();
  }

  ngOnInit(): void {
    this.checkResolution();
  }

  checkResolution(): void {
    let actualResolution: number = screen.width;

    actualResolution < 801 
      ? this.isMobile = true 
      : this.isMobile = false;
  };
}
