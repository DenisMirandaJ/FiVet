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
    //Se suscribe a las solicitudes de guardado del paciente.
    this.pacienteService.pacienteSaveRequest.subscribe(this.enviarPaciente);
    this.pacienteExistente = false;
    //Se suscribe a la seleccion de paciente.
    this.pacienteService.changePaciente.subscribe(
      (paciente: Paciente) => {
        this.paciente = paciente;
        //Se determina si existe o no y se ajusta el formto de fecha
        if(paciente.id == undefined){
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

  // Retorn el nombre del boton de guardar.
  getButtonName() {
    if(this.pacienteExistente)
      return "Actualizar Paciente";
    else
      return "Agregar Paciente";
  }

  // Envia al paciente a la RestAPI para su almacenamiento en la base de datos.
  enviarPaciente(){
    if(this.pacienteExistente){
      this.http.put(ApiRestRoutes.pacientesUri, this.paciente).subscribe(() =>{
        this.pacienteService.pacienteSaved.emit(this.paciente);
        console.log("Actualizado", this.paciente);
      });
    } else {
      console.log("PACIENTE", this.paciente);
      this.http.post(ApiRestRoutes.pacientesUri, this.paciente).subscribe((res) => {
        this.pacienteService.pacienteSaved.emit(this.paciente);
        console.log("RES", res);
        this.pacienteExistente = true;
      });
    }
  }
}