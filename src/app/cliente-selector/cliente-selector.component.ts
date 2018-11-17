import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
