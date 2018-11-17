import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { RegistroMedicoFormsComponent } from './registro-medico-forms/registro-medico-forms.component';
import { ClienteSmallFormComponent } from './cliente-small-form/cliente-small-form.component';
import { PacienteSearchBoxComponent } from './paciente-search-box/paciente-search-box.component';
import { PacienteSearchBoxService } from './paciente-search-box/paciente-search-box.service';

@NgModule({
  declarations: [
    AppComponent,
    PacienteFormComponent,
    RegistroMedicoFormsComponent,
    ClienteSmallFormComponent,
    PacienteSearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PacienteSearchBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }