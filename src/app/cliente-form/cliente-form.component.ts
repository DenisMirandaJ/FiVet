import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Classes/Cliente';
import { HttpClient } from '@angular/common/http';
import {ApiRestRoutes} from '../Constants/ApiRestRoutes';
/*
  Componente que sirve para mostrar informacion sobre el cliente para su edicion o agregar un nuevo cliente, similar a 
  PacienteForm, casi identico.
  Debe recibir un objeto Cliente con o sin id (en el caso de cliente nuevo).
*/
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente : Cliente = new Cliente();
  clienteExistente : boolean = false;

  url : String = "";
  clienteId : String = "";
  
  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.http.get<Cliente>(ApiRestRoutes.clientesUri + this.clienteId).subscribe((cliente) => {
      this.cliente = cliente;
      if(this.cliente._id == undefined) {
        this.clienteExistente = false;
      } else {
        
      }
    });
  }

}
