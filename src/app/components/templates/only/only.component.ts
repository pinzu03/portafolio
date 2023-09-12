import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsOpenMenu } from 'src/app/state/selectors/header.selectors';

@Component({
  selector: 'app-t-only-template',
  templateUrl: './only.component.html',
  styleUrls: ['./only.component.scss']
})
export class OnlyTemplateComponent implements OnInit {

  isOpenMenu$: Observable<boolean> = new Observable();

  constructor( private store: Store ) {}


  ngOnInit(): void {
    this.isOpenMenu$ = this.store.select(selectIsOpenMenu);

  }

}
