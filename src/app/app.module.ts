import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { RegistroMedicoFormsComponent } from './registro-medico-forms/registro-medico-forms.component';
import { PacienteSearchBoxComponent } from './paciente-search-box/paciente-search-box.component';
import { PacienteSearchBoxService } from './paciente-search-box/paciente-search-box.service';
import { ClienteSelectorComponent } from './cliente-selector/cliente-selector.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteSelectorService } from './cliente-selector/cliente-selector.service';

@NgModule({
  declarations: [
    AppComponent,
    PacienteFormComponent,
    RegistroMedicoFormsComponent,
    PacienteSearchBoxComponent,
    ClienteSelectorComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PacienteSearchBoxService, ClienteSelectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }