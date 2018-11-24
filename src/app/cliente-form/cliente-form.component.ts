import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Classes/Cliente';
import { HttpClient } from '@angular/common/http';
import {ApiRestRoutes} from '../Constants/ApiRestRoutes';
import {ClienteSelectorService} from '../cliente-selector/cliente-selector.service';
/*
  Componente que sirve para mostrar informacion sobre el cliente para su edicion o agregar un nuevo cliente, similar a 
  PacienteForm, casi identico.
  Debe recibir un objeto Cliente con o sin id (en el caso de cliente nuevo).

  TODO: - Validar modelo.
        - Solo habilitar boton con modelo correcto.
        - Datos requeridos (rut)
*/
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente : Cliente = new Cliente();
  clienteExistente : boolean = false;
  
  constructor(private http: HttpClient, private clienteSelectorService: ClienteSelectorService) {
    
  }

  ngOnInit() {
    this.clienteSelectorService.clienteSelected.subscribe(
      (cliente: Cliente) => {
        console.log("SelectorService", cliente);
        this.cliente = cliente;
        if(cliente._id == undefined){
          this.clienteExistente = false;
        } else {
          this.clienteExistente = true;
        }
    });
  }

  enviarCliente(form) {
    console.log("Enviar Cliente");
    if(this.clienteExistente) {
      this.http.put(ApiRestRoutes.clientesUri, this.cliente).subscribe((res)=> {
        console.log("ENVIAR_CLIENTE_RES", res);
      });
    } else {
      this.http.post(ApiRestRoutes.clientesUri, this.cliente).subscribe((res)=> {
        console.log("ENVIAR_CLIENTE_RES", res);
        this.clienteExistente = true;
        this.cliente = res;
      });
    }
  }

  getButtonName(){
    return this.clienteExistente ? "Actualizar Cliente" : "Agregar Cliente";
  }
}
