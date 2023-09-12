import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { TemplatesModule } from './components/templates/templates.module';
import { MoleculesModule } from './components/molecules/molecules.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { ROOT_REDUCERS } from './interfaces/store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplatesModule,
    MoleculesModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: "Portfolio" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
