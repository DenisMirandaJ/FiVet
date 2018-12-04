import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { RegistroMedicoFormsComponent } from './registro-medico-forms/registro-medico-forms.component';
import { PacienteSearchBoxComponent } from './paciente-search-box/paciente-search-box.component';
import { PacienteService } from './Services/PacienteService';
import { ClienteSelectorComponent } from './cliente-selector/cliente-selector.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteService } from './Services/ClienteService';
import { RegistrosMedicosListComponent } from './registros-medicos-list/registros-medicos-list.component';
import { RegistroMedicoService } from './Services/RegistroMedicoService';


@NgModule({
  declarations: [
    AppComponent,
    PacienteFormComponent,
    RegistroMedicoFormsComponent,
    PacienteSearchBoxComponent,
    ClienteSelectorComponent,
    ClienteFormComponent,
    RegistrosMedicosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PacienteService, ClienteService, RegistroMedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }