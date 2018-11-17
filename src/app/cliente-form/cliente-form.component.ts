import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
