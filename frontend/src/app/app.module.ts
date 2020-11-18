import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DatosResultadosclinicosComponent } from './datos-resultadosclinicos/datos-resultadosclinicos.component';
import { NuevoresultadoComponent } from './nuevoresultado/nuevoresultado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DatosResultadosclinicosComponent,
    NuevoresultadoComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
