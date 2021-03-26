import { Mensaje } from './mensaje';

export class Chat {
    id: string;
    usuario: string;
    vendedor: string;
    fecha: string;
    mensajes: Mensaje[];
    fechaValor: number;
    estado: boolean;

    constructor() {
        this.mensajes = new Array<Mensaje>();
    }

    dameJSON() {
        return JSON.parse(JSON.stringify(this));
    }
}
