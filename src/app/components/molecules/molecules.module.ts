import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MenuComponent } from './menu/menu.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PresentationComponent,
    MenuComponent,
    MyProjectsComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    HeaderComponent,
    PresentationComponent,
    MenuComponent,
    MyProjectsComponent
  ]
})
export class MoleculesModule { }
