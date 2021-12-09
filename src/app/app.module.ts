import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    ProyectoComponent,
    MenuComponent,
    FooterComponent,
    PipesComponent,
    FilterPipe
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
