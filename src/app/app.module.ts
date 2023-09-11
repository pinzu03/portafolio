import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { TemplatesModule } from './components/templates/templates.module';
import { MoleculesModule } from './components/molecules/molecules.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplatesModule,
    MoleculesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
