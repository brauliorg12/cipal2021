export class Mensaje {
  id: string;
  usuario: string;
  usuario_recibe: string;
  usuario_envia: string;
  chat_id: string;
  fecha: string;
  mensaje: string;
  fechaValor: number;
  estado: boolean;
  visto: boolean;

  dameJSON() {
    return JSON.parse(JSON.stringify(this));
  }
}
