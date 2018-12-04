import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Classes/Cliente';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {ApiRestRoutes} from '../Constants/ApiRestRoutes';
import {ClienteService} from '../Services/ClienteService';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
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
  
  constructor(private http: HttpClient, private clienteService: ClienteService) {
    
  }

  ngOnInit() {
    // Se suscribe a las requests de guardar cliente.
    this.clienteService.clienteSaveRequest.subscribe(this.enviarCliente);
    // Se suscribe a la selección de cliente (desde buscador u otros).
    this.clienteService.clienteSelected.subscribe(
      (cliente: Cliente) => {
        console.log("SelectorService", cliente);
        this.cliente = cliente;
        // Se determina si es un cliente existente o nuevo.
        if(cliente.id == undefined){
          this.clienteExistente = false;
        } else {
          this.clienteExistente = true;
        }
    });
  }

  //Envia el cliente a la RestAPI y emite el mensaje de guardado.
  enviarCliente() {
    console.log("Enviar Cliente");
    if(this.clienteExistente) {
      this.http.put(ApiRestRoutes.clientesUri, this.cliente)
      .subscribe((res)=> {
        this.clienteService.clienteSaved.emit(this.cliente);
        console.log("ENVIAR_CLIENTE_RES", res);
        this.clienteExistente = true;
        this.cliente = res;
      }, (error) => {
        console.log('error', error);
      });
    } else {
      this.http.post(ApiRestRoutes.clientesUri, this.cliente)
      .subscribe((res)=> {
        this.clienteService.clienteSaved.emit(this.cliente);
        console.log("ENVIAR_CLIENTE_RES", res);
        this.clienteExistente = true;
        this.cliente = res;
      }, (error) => {
        console.log('error', error);
      });
    }
  }

  // Retorna el nombre del boton para guardar.
  getButtonName(){
    return this.clienteExistente ? "Actualizar Cliente" : "Agregar Cliente";
  }

}
