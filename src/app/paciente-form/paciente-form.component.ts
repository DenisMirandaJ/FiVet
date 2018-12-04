import { Component, OnInit, HostBinding} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Paciente} from "../Classes/Paciente";
import {PacienteService} from '../Services/PacienteService';
import * as _ from "lodash";
import 'rxjs/add/operator/map';
import { ApiRestRoutes } from '../Constants/ApiRestRoutes';

//TODO: - Hacer que reaccione ante una llamada de "nuevo paciente", donde se reinicie todo.
//      - Hacer que reaccione ante una llamada de Paciente seleccionado.
@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  @HostBinding('class.paciente')
  paciente: Paciente = new Paciente();
  pacienteExistente: boolean;

  estado:string = "";

  constructor(private http:HttpClient, private pacienteService:PacienteService) {
  }
  ngOnInit() { 
    this.pacienteExistente = false;
    this.pacienteService.changePaciente.subscribe(
      (paciente: Paciente) => {
        this.paciente = paciente;
        if(paciente._id == undefined){
          this.pacienteExistente = false;
          this.paciente.ultimaVisita = new Date(Date.now()).toISOString();
          this.paciente.ultimaVisita = paciente.ultimaVisita.replace("Z", "");
          this.paciente.ultimaVisita = this.paciente.ultimaVisita.substring(0,this.paciente.ultimaVisita.length - 8);
        } else {
          this.pacienteExistente = true;
          this.paciente.ultimaVisita = paciente.ultimaVisita.replace("Z", "");
        }
    });
  }

  //TODO: Borrar.
  castradoChanged = (event) => {
    console.log(event.target.checked);
  }

  getButtonName() {
    if(this.pacienteExistente)
      return "Actualizar Paciente";
    else
      return "Agregar Paciente";
  }

  enviarPaciente(form){
    //TODO: - Cambiar pacienteExistente.
    //      - Validar form (modelo) antes de postear.
    if(this.pacienteExistente){
      this.http.put(ApiRestRoutes.pacientesUri, this.paciente).subscribe(() =>{
        console.log("Actualizado", this.paciente);
      });
    } else {
      console.log("PACIENTE", this.paciente);
      this.http.post(ApiRestRoutes.pacientesUri, this.paciente).subscribe((res) => {
        console.log("RES", res);
        this.pacienteExistente = true;
      });
    }
  }
}