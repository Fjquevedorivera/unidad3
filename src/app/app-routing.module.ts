import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

const routes: Routes = [
  {
    path: "proyecto",
    component: ProyectoComponent 
  },
  {
    path: "contacto",
    component: ContactoComponent
  },
  {
    path: "pipes",
    component: PipesComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
