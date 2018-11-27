import { Component, OnInit } from '@angular/core';
import { RegistroMedico } from '../Classes/RegistroMedico';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash";
import 'rxjs/add/operator/map';
import { Input } from '@angular/core';
import { Paciente } from '../Classes/Paciente';
import { RegistrosMedicosListService } from '../registros-medicos-list/registros-medicos-list.service';
import { ApiRestRoutes } from '../Constants/ApiRestRoutes';


@Component({
  selector: 'app-registro-medico-forms',
  templateUrl: './registro-medico-forms.component.html',
  styleUrls: ['./registro-medico-forms.component.css']
})
export class RegistroMedicoFormsComponent implements OnInit {
  registroMedico: RegistroMedico = new RegistroMedico();
  pacienteId: string;
  clienteId: string;
  registroExistente: boolean;
  
  constructor(private http:HttpClient, private registrosMedicosListService: RegistrosMedicosListService) {
  }

  ngOnInit() {
    this.registroExistente = false;
    this.registroMedico.fecha = new Date(Date.now()).toISOString();
    this.registroMedico.fecha = this.registroMedico.fecha.substring(0,this.registroMedico.fecha.length - 8);
    this.registrosMedicosListService.registroMedicoSelected
    .subscribe((registroMedico : RegistroMedico) => {
      console.log("llego el registro", registroMedico);
      this.registroMedico = registroMedico;
      if(this.registroMedico._id == undefined){
        this.registroExistente = false;
        this.registroMedico.fecha = new Date(Date.now()).toISOString();
        this.registroMedico.fecha = this.registroMedico.fecha.substring(0,this.registroMedico.fecha.length - 8);

      } else {
        this.registroExistente = true;
        this.registroMedico.fecha = registroMedico.fecha.replace("Z", "");
      }

      

    });

  }
  getButtomName(){
    if(this.registroExistente) return "Actualizar";
    return "Agregar";
  }
  enviarRegistroMedico(){
    console.log("boton presionado", this.registroMedico);
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



