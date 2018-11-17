import { Component, OnInit } from '@angular/core';
import { RegistroMedico } from '../Classes/RegistroMedico';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash";
import 'rxjs/add/operator/map';
import { Input } from '@angular/core';
import { Paciente } from '../Classes/Paciente';

@Component({
  selector: 'app-registro-medico-forms',
  templateUrl: './registro-medico-forms.component.html',
  styleUrls: ['./registro-medico-forms.component.css']
})
export class RegistroMedicoFormsComponent implements OnInit {
  registroMedico: RegistroMedico = new RegistroMedico();
  paciente: Paciente = new Paciente();

  @Input()
  registroMedicoId: string;
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    var url = "http://localhost:80/registrosMedicos/";
    var urlPaciente = "http://localhost:80/pacientes/";
    if(this.registroMedico){
      url += this.registroMedico;
    }
    this.http
      .get<RegistroMedico>(url)
      .subscribe(data => {
        console.log(data);
        this.registroMedico = data;
    });

    

  }


}
