import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    BusquedaComponent,
	GestionUsuariosComponent,
 	CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
