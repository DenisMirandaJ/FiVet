import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../Classes/Cliente';

@Injectable()
export class ClienteService {
    @Output()
    clienteSelected: EventEmitter<Cliente> = new EventEmitter();
    clienteSaveRequest: EventEmitter<void> = new EventEmitter();
    clienteSaved: EventEmitter<Cliente> = new EventEmitter();

    constructor(private http: HttpClient) {

    }

    saveCliente() {
        this.clienteSaveRequest.emit();
    }

    selectCliente(cliente: Cliente){
        this.clienteSelected.emit(cliente);
    }

    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "Server Error");
    }
}