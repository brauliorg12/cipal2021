import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Commerce } from '../classes/interfaces';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';
import { RespuestaProducto } from '../classes/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ExpositoresService {

  paginaSales = 0;

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }


  getExpositores() {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get<RespuestaProducto>(`${URL}/expositores/list`, { headers });

  }

  getProductsAll(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    this.paginaSales++;

    return this.http.get<RespuestaProducto>(`${URL}/expositores/inicio/?pagina=${this.paginaSales}`);

  }

  createExpositor(data: any, photo: File): any {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(resolve => {
      const fd = new FormData();

      fd.append('nombre', data.nombre);
      fd.append('image', photo);
      fd.append('descripcion', data.descripcion);
      // Guardar rubro como array en formdata
      if (data.categoria) {
        const arr = data.categoria;
        for (let i = 0; i < arr.length; i++) {
          fd.append('categoria', arr[i]);
        }
      }

      fd.append('etiquetas', data.etiquetas);
      fd.append('stand', data.stand);
      fd.append('email', data.email);
      fd.append('telefono', data.telefono);
      fd.append('linkweb', data.linkweb);
      fd.append('urlvideo', data.urlvideo);
      fd.append('urdadjunto', data.urdadjunto);

      this.http.post(`${URL}/expositores`, fd, { headers })
        .subscribe(resp => {

          // this.nuevoOffer.emit(resp['offer']);
          // resolve(true); Como estaba antes
          resolve(resp); // lo cambie para obtener el ID
        });

    });
  }


  // Eliminar Expositor
  eliminarData(id: string): Observable<any> {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get(`${URL}/expositores/delete/` + id, { headers });

  }

  updateExpo(data: any, photo: File): Observable<any> {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    const fd = new FormData();

    fd.append('nombre', data.nombre);
    fd.append('image', photo);
    fd.append('descripcion', data.descripcion);
    // Guardar rubro como array en formdata
    if (data.categoria) {
      const arr = data.categoria;
      for (let i = 0; i < arr.length; i++) {
        fd.append('categoria', arr[i]);
      }
    }

    fd.append('etiquetas', data.etiquetas);
    fd.append('img', data.img);
    fd.append('stand', data.stand);
    fd.append('email', data.email);
    fd.append('telefono', data.telefono);
    fd.append('linkweb', data.linkweb);
    fd.append('urlvideo', data.urlvideo);
    fd.append('urdadjunto', data.urdadjunto);
    return this.http.put(`${URL}/expositores/updated/${data._id}`, fd, { headers });
  }


  getSale(id: string): Observable<any> {

    return this.http.get(`${URL}/expositores/` + id);

  }

  getMySale(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get(`${URL}/expositores/mycom/` + id, { headers });
  }

  getSaleAdm(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });


    return this.http.get(`${URL}/expositores/adm/` + id, { headers });

  }

  getOffer(id: string): Observable<any> {

    return this.http.get(`${URL}/offers/` + id);

  }

}
