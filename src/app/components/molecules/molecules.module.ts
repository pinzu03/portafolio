import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PresentationComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    HeaderComponent,
    PresentationComponent,
    MenuComponent
  ]
})
export class MoleculesModule { }
