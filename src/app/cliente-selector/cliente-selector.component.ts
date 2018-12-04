import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../Services/ClienteService';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../Classes/Cliente';
import {ApiRestRoutes} from '../Constants/ApiRestRoutes';
/*
  Componente que recive un id de Paciente y busca los clientes asociados a dicho paciente, para desplegar un
  seleccionador de cliente (esos donde hay un boton con flecha a la deecha y se despliega la lista, luego selecciono uno
  o "nuevo cliente"). Según el cliente seleccionado (existente o "nuevo cliente") se enviaria dicho Cliente al ClienteForm
  para editar o agregar, similar al PacienteForm.
*/
@Component({
  selector: 'app-cliente-selector',
  templateUrl: './cliente-selector.component.html',
  styleUrls: ['./cliente-selector.component.css']
})
export class ClienteSelectorComponent implements OnInit {
  //TODO: - clienteId solo es pra prueba.
  //      - cliente no es necesario.
  //clienteId: String = "5bead431f34cc1be7a08d3b2";
  clienteId: String ="3";
  cliente: Cliente;
  constructor(private http: HttpClient ,private clienteService : ClienteService) { }

  ngOnInit() {
    if(this.clienteId){
      this.http.get<Cliente>(ApiRestRoutes.clientesUri + this.clienteId).subscribe(
        cliente => {
          this.clienteService.selectCliente(cliente);
        },
        error => {
          if(error.status == 404){
            //se manda un paciente vacio (atributos undefined)
            this.clienteService.selectCliente(new Cliente());
          }
        }
      );
    } else {
      this.clienteService.selectCliente(new Cliente());
    }
  }
}
