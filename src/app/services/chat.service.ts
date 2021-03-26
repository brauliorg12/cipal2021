import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }


  enviarChat(chat: any): any {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return this.http.post(URL + '/chat', chat,
      { headers });
  }

  recibirChat(data: any): any {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    const dataToSend = { user_id: data };
    return this.http.post(URL + '/chat/recibir', dataToSend, { headers });
  }



}
