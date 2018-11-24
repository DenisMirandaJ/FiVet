import { EventEmitter, Injectable, Output} from '@angular/core';
import {Cliente} from "../Classes/Cliente";

//Caja de busqueda de paciente
@Injectable()
export class ClienteSelectorService {

    @Output()
    clienteSelected: EventEmitter<Cliente> = new EventEmitter();

    selectCliente(cliente: Cliente){
        this.clienteSelected.emit(cliente);
    }
}