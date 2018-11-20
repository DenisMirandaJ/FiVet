import { Component, OnInit, HostListener} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Paciente} from "../Classes/Paciente";
import {ApiRestRoutes} from "../Constants/ApiRestRoutes";
import * as _ from "lodash";
import 'rxjs/add/operator/map';
import { PacienteSearchBoxService } from './paciente-search-box.service';

@Component({
  selector: 'app-paciente-search-box',
  templateUrl: './paciente-search-box.component.html',
  styleUrls: ['./paciente-search-box.component.css']
})

//TODO: Implementar busqueda, por ahora solo devuelve un id especifico.
export class PacienteSearchBoxComponent implements OnInit {

  pacienteId:string = "5bf41606dbd5125b6a052c66";
  //pacienteId:string = "";
  paciente:Paciente = new Paciente();
  castrado:string = "true";

  constructor(private http:HttpClient, private pacienteSearchBoxService: PacienteSearchBoxService) { }

  ngOnInit() {
    var url = ApiRestRoutes.pacientesUri;

    if(this.pacienteId){
      url += this.pacienteId;
      
      this.http
      .get<Paciente>(url)
      .subscribe(
        data => {
          this.paciente = data;
          //console.log("subscribe",this.paciente);
          this.selectPaciente(this.paciente);
        },
        error => {
          if(error.status == 404){
            //se manda un paciente vacio (atributos undefined)
            this.selectPaciente(this.paciente);
          }
        }
      );
    } else {
      this.selectPaciente(new Paciente());
    }

    
    //TODO: Revisar el formato de la fecha.
    //TODO: Revisar que pasa si no se encuentra ningun paciente.
  }

  @HostListener('paciente-selected')
  selectPaciente(paciente: Paciente){
    this.paciente = paciente;
    this.pacienteSearchBoxService.selectPaciente(this.paciente);
  }

}
