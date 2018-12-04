import { Desparacitacion } from "./Desparacitacion";
import { Vacuna } from "./Vacuna";

export class RegistroMedico {
    constructor(
        public id?: String,
        public pacienteId?: String,
        public clienteId?: String,
        public fecha?: string,
        public anamnesia?: String,
        public peso?: Number,
        public temperatura?: Number,
        public hidratacion?: Number,
        public pulso?: Number,
        public frecuenciaCardiaca?: Number,
        public frecuenciaRespiratoria?: Number,
        public mucosas?: Number,
        public tiempoDeLlenadoCapilar?: Number,
        public ganglios?: String,
        public reflejoTusigeno?: String,
        public reflejoDeglutorio?: String,
        public palpitacionAbdominal?: String,
        public palmopercusion?: String, 
        public condicionCorporal?: String,
        public tonsillas?: String,
        public conciencia?: String,
        public desparacitaciones?: Desparacitacion[],
        public vacunas?: Vacuna[]){

        }
}