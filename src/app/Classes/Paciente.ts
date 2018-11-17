export class Paciente {
    constructor(
        public _id?: string,
        public nombre?: string,
        public especie?: string,
        public raza?: string,
        public color?: string,
        public clientes?: String[],
        public castrado: String = "NO",
        public chip?: string,
        public ultimaVisita?: Date,
        public foto?: ArrayBuffer
        ){}
}