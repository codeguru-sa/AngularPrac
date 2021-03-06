import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServerComponent } from './server/server.component';
import { Assi2Component } from './assi2/assi2.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    NavBarComponent,
    ServerComponent,
    Assi2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
