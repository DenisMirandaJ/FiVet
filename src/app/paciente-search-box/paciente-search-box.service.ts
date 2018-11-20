import { EventEmitter, Injectable, Output} from '@angular/core';
import {Paciente} from "../Classes/Paciente";

//Caja de busqueda de paciente
@Injectable()
export class PacienteSearchBoxService {

    pacienteId:string = "";
    paciente:Paciente;
    @Output()
    changePaciente: EventEmitter<Paciente> = new EventEmitter();

    selectPaciente(paciente: Paciente){
        this.paciente = paciente;
        this.changePaciente.emit(this.paciente);
    }
}