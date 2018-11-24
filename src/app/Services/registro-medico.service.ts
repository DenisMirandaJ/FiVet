import { EventEmitter, Injectable, Output} from '@angular/core';
import {RegistroMedico} from "../Classes/RegistroMedico";

@Injectable()
export class RegistroMedicoService {

    @Output()
    setRegistroMedico: EventEmitter<RegistroMedico> = new EventEmitter();

    selectRegistroMedico(registroMedico: RegistroMedico){
        this.setRegistroMedico.emit(registroMedico);
    }
}