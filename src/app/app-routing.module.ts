import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './ex1/presentation/presentation.component';
import { EmployslistComponent } from './ex1/employslist/employslist.component';
import { AjoutemployeComponent } from './ex1/ajoutemploye/ajoutemploye.component';
import { SelectedemployeComponent } from './ex1/selectedemploye/selectedemploye.component';

import { Er404Component } from './ex1/er404/er404.component';


import { AccComponent } from './acc/acc.component';
import { ProComponent } from './pro/pro.component';
import { ConComponent } from './con/con.component';

const routes: Routes = [
  {path:'presentation', component:PresentationComponent}, 
  {path:'liste employes', component:EmployslistComponent}, 
  {path:'employe/:matricule', component:SelectedemployeComponent},

  {path:'ajout employe', component:AjoutemployeComponent}, 
  {path:'select ', component:SelectedemployeComponent}, 

  {path:'', redirectTo:'presentation', pathMatch:'full'},
  {path:'**', component:Er404Component}



/*
  {path:'accueil', component:AccComponent}, 
  {path:'produits', component:ProComponent}, 
  {path:'produits/:id', component:ProComponent},
  {path:'contact', component:ConComponent}, 
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:ConComponent}, 
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
