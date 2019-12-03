import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccComponent } from './acc/acc.component';
import { ProComponent } from './pro/pro.component';
import { ConComponent } from './con/con.component';
import { MenuComponent } from './menu/menu.component';
import { MymneuComponent } from './ex1/mymneu/mymneu.component';
import { PresentationComponent } from './ex1/presentation/presentation.component';
import { EmployslistComponent } from './ex1/employslist/employslist.component';
import { SelectedemployeComponent } from './ex1/selectedemploye/selectedemploye.component';
import { AjoutemployeComponent } from './ex1/ajoutemploye/ajoutemploye.component';
import { Er404Component } from './ex1/er404/er404.component';

@NgModule({
  declarations: [
    AppComponent,
    AccComponent,
    ProComponent,
    ConComponent,
    MenuComponent,
    MymneuComponent,
    PresentationComponent,
    EmployslistComponent,
    SelectedemployeComponent,
    AjoutemployeComponent,
    Er404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
