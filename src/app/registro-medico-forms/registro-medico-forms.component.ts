import { Component, OnInit } from '@angular/core';
import { RegistroMedico } from '../Classes/RegistroMedico';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash";
import 'rxjs/add/operator/map';
import { Input } from '@angular/core';
import { Paciente } from '../Classes/Paciente';
import {Cliente} from '../Classes/Cliente';

@Component({
  selector: 'app-registro-medico-forms',
  templateUrl: './registro-medico-forms.component.html',
  styleUrls: ['./registro-medico-forms.component.css']
})
export class RegistroMedicoFormsComponent implements OnInit {
  registroMedico: RegistroMedico = new RegistroMedico();
  paciente: Paciente;
  cliente: Cliente;

  @Input()
  registroMedicoId: string;
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    //TODO: suscribir al serivcio de list.
  }

  enviarRegistroMedico(form) {
    
  }
}
