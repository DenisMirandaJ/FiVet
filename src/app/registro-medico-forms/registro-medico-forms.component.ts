import { Component, OnInit } from '@angular/core';
import { RegistroMedico } from '../Classes/RegistroMedico';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash";
import 'rxjs/add/operator/map';
import { Input } from '@angular/core';
import { Paciente } from '../Classes/Paciente';
import { RegistroMedicoService } from '../Services/RegistroMedicoService';
import { ApiRestRoutes } from '../Constants/ApiRestRoutes';
import { ClienteService } from '../Services/ClienteService';
import { PacienteService } from '../Services/PacienteService'
import { Cliente } from '../Classes/Cliente';


@Component({
  selector: 'app-registro-medico-forms',
  templateUrl: './registro-medico-forms.component.html',
  styleUrls: ['./registro-medico-forms.component.css']
})
export class RegistroMedicoFormsComponent implements OnInit {
  registroMedico: RegistroMedico = new RegistroMedico();
  registroExistente: boolean;
  
  constructor(private http: HttpClient, private registrosMedicosListService: RegistroMedicoService,
    private clienteService: ClienteService, private pacienteService: PacienteService) {

  }

  ngOnInit() {
    //Se crea un registro médico solo con fecha.
    this.registroExistente = false;
    this.registroMedico.fecha = new Date(Date.now()).toISOString();
    this.registroMedico.fecha = this.registroMedico.fecha.substring(0,this.registroMedico.fecha.length - 8);
    this.registrosMedicosListService.registroMedicoSelected
    //Se suscribe a la selección de un registro medico
    .subscribe((registroMedico : RegistroMedico) => {
      console.log("llego el registro", registroMedico);
      this.registroMedico = registroMedico;
      //Se determina si existe o no y se ajusta el formato de fecha.
      if(this.registroMedico.id == undefined){
        this.registroExistente = false;
        this.registroMedico.fecha = new Date(Date.now()).toISOString();
        this.registroMedico.fecha = this.registroMedico.fecha.substring(0,this.registroMedico.fecha.length - 8);

      } else {
        this.registroExistente = true;
        this.registroMedico.fecha = registroMedico.fecha.replace("Z", "");
      }
    });

  }

  //Retorna el nombre del boton de guardar.
  getButtomName(){
    if(this.registroExistente) return "Actualizar";
    return "Agregar";
  }

  //Se asocia el cliente guardado al registro medico
  clienteSaved(cliente: Cliente) {
    this.registroMedico.clienteId = cliente.id;
    if(this.registroMedico.pacienteId){
      this.SaveRegistroMedico();
    }
    this.clienteService.clienteSaved.unsubscribe();
  }

  //Se asocia el paciente guardado al registro medico
  pacienteSaved(paciente: Paciente) {
    this.registroMedico.pacienteId = paciente.id;
    if(this.registroMedico.clienteId){
      this.SaveRegistroMedico();
    }
    this.pacienteService.pacienteSaved.unsubscribe();
  }

  //Solicita el guardado de cliente y paciente, y envia el registro medico a la RestAPI.
  enviarRegistroMedico(){
    console.log("boton presionado", this.registroMedico);
    this.registroMedico.clienteId = null;
    this.registroMedico.pacienteId = null;
    this.clienteService.clienteSaved.subscribe(this.clienteSaved);
    this.pacienteService.pacienteSaved.subscribe(this.pacienteSaved);
    this.SaveRegistroMedico();
  }

  // Envia el registro medico a la RestAPI.
  SaveRegistroMedico() {
    if(this.registroExistente){
      this.http.put(ApiRestRoutes.registroMedicoUri,this.registroMedico).subscribe((res) => {
        //TODO: bloquear boton guardar y avisar exito
        console.log("Actualizar",res)
      });
    } else {
      this.http.post(ApiRestRoutes.registroMedicoUri,this.registroMedico).subscribe((res) => {
        //TODO: bloquear boton guardar y avisar exito
        this.registroExistente = true;
        console.log("Agregar",res)
      });
    }
  }
  }



