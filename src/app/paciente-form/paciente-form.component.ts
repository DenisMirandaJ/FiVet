import { Component, OnInit, HostBinding} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Paciente} from "../Classes/Paciente";
import {PacienteSearchBoxService} from '../paciente-search-box/paciente-search-box.service';
import * as _ from "lodash";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  @HostBinding('class.paciente')
  paciente: Paciente = new Paciente();
  pacienteExistente: boolean;

  ultimaVisita:Date = new Date(Date.now());
  estado:string = "";

  constructor(private http:HttpClient, private pacienteSearchBoxService:PacienteSearchBoxService) {
  }
  ngOnInit() { 
    this.pacienteSearchBoxService.changePaciente.subscribe(
      (paciente: Paciente) => {
        this.pacienteExistente = paciente._id != undefined;
        this.paciente = paciente;
        this.ultimaVisita = this.paciente.ultimaVisita;
    });
  }

  getUltimaVisita(): Date {
    if(this.paciente.ultimaVisita)
      return this.paciente.ultimaVisita;
    else {
      return new Date("2018-11-12");
    }
  }

  castradoChanged = (event) => {
    console.log(event.target.checked);
  }

  getButtonName(): string{
    return "Actualizar Paciente";
  }

  enviarPaciente(form){
    console.log(form);
  }
}