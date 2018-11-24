import { Component, OnInit } from '@angular/core';
import {RegistrosMedicosListService} from './registros-medicos-list.service';
import { RegistroMedico } from '../Classes/RegistroMedico';

@Component({
  selector: 'app-resgistros-medicos-list',
  templateUrl: './resgistros-medicos-list.component.html',
  styleUrls: ['./resgistros-medicos-list.component.css']
})
export class ResgistrosMedicosListComponent implements OnInit {

  registroMedicoId: String;
  constructor(private registroMedicoListService: RegistrosMedicosListService) { }

  ngOnInit() {
    if(this.registroMedicoId) {
      //TODO: Usar api-rest y enviar al servicio
    } else {
      //TODO: emitir nuevo registroMedico
    }
  }

}
