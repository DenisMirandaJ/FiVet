import { EventEmitter, Injectable, Output} from '@angular/core';
import {RegistroMedico} from "../Classes/RegistroMedico";

//Caja de busqueda de paciente
@Injectable()
export class RegistrosMedicosListService {
    @Output()
    changePaciente: EventEmitter<RegistroMedico> = new EventEmitter();

    selectRegistroMedico(registroMedico: RegistroMedico){
        this.changePaciente.emit(registroMedico);
    }
}