import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlyTemplateComponent } from './only/only.component';

import { MoleculesModule } from '../molecules/molecules.module';


@NgModule({
  imports: [
    CommonModule,
    MoleculesModule
  ],
  exports: [
    OnlyTemplateComponent
  ],
  declarations: [
    OnlyTemplateComponent
  ],
  providers: [],
})
export class TemplatesModule { }
