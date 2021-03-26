import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';
import { RespuestaCats, Cats } from '../classes/interface-cats';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  paginaSales = 0;

  images = {};


  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }


  getSale(id: string): Observable<any> {

    return this.http.get(`${URL}/cats/` + id);

  }

  getSaleAdm(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get(`${URL}/cats/adm/` + id, { headers });

  }



  getSTextHome(): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get(`${URL}/cats/home`, { headers });

  }

  getTextSearch(): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get(`${URL}/cats/search`, { headers });

  }

  getFootersHome() {

    return this.http.get<RespuestaCats>(`${URL}/cats/hfooter`);

  }

  getHomeAll() {

    return this.http.get<RespuestaCats>(`${URL}/cats/hall`);

  }


  getFqastexts() {

    return this.http.get<RespuestaCats>(`${URL}/cats`);

  }

  getEmergencys(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    this.paginaSales++;

    return this.http.get<RespuestaCats>(`${URL}/cats/emergency/?pagina=${this.paginaSales}`);

  }

  getIceCreams(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    this.paginaSales++;

    return this.http.get<RespuestaCats>(`${URL}/cats/icecream/?pagina=${this.paginaSales}`);

  }


  getTaxis(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    this.paginaSales++;

    return this.http.get<RespuestaCats>(`${URL}/cats/taxis/?pagina=${this.paginaSales}`);

  }


  getDeliverys(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    this.paginaSales++;

    return this.http.get<RespuestaCats>(`${URL}/cats/delivery/?pagina=${this.paginaSales}`);

  }


  getUsefuls(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    this.paginaSales++;

    return this.http.get<RespuestaCats>(`${URL}/cats/useful/?pagina=${this.paginaSales}`);

  }

  // ! TOTALES
  getTotalCom() {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get<RespuestaCats>(`${URL}/cats/totalcom`);

  }

  getTotalProf() {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get<RespuestaCats>(`${URL}/cats/totalprof`, { headers });

  }

  getTotalServ() {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get<RespuestaCats>(`${URL}/cats/totalserv`, { headers });

  }


  // Cats List
  getCatsList(name: string) {

    return this.http.get<RespuestaCats>(`${URL}/cats/list/${name}`);

  }


  // Cats Filter
  getCatsFilter(name: string) {

    return this.http.get<RespuestaCats>(`${URL}/cats/filter/${name}`);

  }


  getComAdmTotalP() {

    return this.http.get<RespuestaCats>(`${URL}/cats/cadmontotalp`);

  }

  getComAdmTotalU() {

    return this.http.get<RespuestaCats>(`${URL}/cats/cadmontotalu`);

  }

  getComAdmTotalH() {

    return this.http.get<RespuestaCats>(`${URL}/cats/cadmontotalh`);

  }

  // Con Usuarios
  getComAdmSoloU(page) {

    return this.http.get<RespuestaCats>(`${URL}/cats/cadmon/?pagina=${page}`);

  }

  getComAdmSoloUs(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    return this.http.get<RespuestaCats>(`${URL}/cats/cadmon/?pagina=${this.paginaSales}`);

  }

  // No Publicados
  getComAdmSoloOff(page) {

    return this.http.get<RespuestaCats>(`${URL}/cats/cadmoff/?pagina=${page}`);

  }

  // Publicados
  // !Obtener COMERCIOS de usuarios para ADMIN
  getComAdm(page) {

    return this.http.get<RespuestaCats>(`${URL}/cats/cadm/?pagina=${page}`);

  }

  getComAdmPage(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    return this.http.get<RespuestaCats>(`${URL}/cats/cadm/?pagina=${this.paginaSales}`);

  }

  // Home
  getHomeAdm(page) {

    return this.http.get<RespuestaCats>(`${URL}/cats/cadmhome/?pagina=${page}`);

  }

  getHomeAdmPage(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    return this.http.get<RespuestaCats>(`${URL}/cats/cadmhome/?pagina=${this.paginaSales}`);

  }


  getComAdmSoloOfft(pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    return this.http.get<RespuestaCats>(`${URL}/cats/cadmoff/?pagina=${this.paginaSales}`);

  }


  getPremiums() {

    return this.http.get<RespuestaCats>(`${URL}/cats/premium`);

  }

  getmySales() {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });


    return this.http.get<any>(`${URL}/cats/slides/?pagina=${this.paginaSales}`, { headers });

  }

  getCommercesRubros(busqueda: string, pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    this.paginaSales++;

    return this.http.get<RespuestaCats>(`${URL}/search/rubros/` + busqueda + `/?pagina=${this.paginaSales}`);

  }


  getCommercesRubrosPremium(busqueda: string) {

    return this.http.get<RespuestaCats>(`${URL}/search/rubrosp/` + busqueda);

  }


  getCommercesEstado(busqueda: string, pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    this.paginaSales++;

    return this.http.get<RespuestaCats>(`${URL}/search/estado/` + busqueda + `?pagina=${this.paginaSales}`);

  }

  searchCommerces(busqueda: string, pull: boolean = false) {

    if (pull) {
      this.paginaSales = 0;
    }

    this.paginaSales++;

    return this.http.get<RespuestaCats>(`${URL}/search/comercios/` + busqueda + `?pagina=${this.paginaSales}`);

  }

  searchCommercesPremium(busqueda: string) {

    return this.http.get<RespuestaCats>(`${URL}/search/comerciosp/` + busqueda);

  }


  createCat(item: any): any {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(resolve => {
      const fd = new FormData();

      fd.append('status', item.status);
      fd.append('tipo', item.tipo);
      fd.append('nombre', item.nombre);
      fd.append('tags', item.tags);
      fd.append('isadmin', item.isadmin);

      this.http.post(`${URL}/cats`, fd, { headers })
        .subscribe(resp => {
          if (resp) {
            resolve(true);
          }
        });

    });
  }


  updateSale(sale): Observable<Cats> {

    const params = sale;

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.put(`${URL}/faqstext/updated/${sale._id}`, params, { headers });

  }

  updateSaleAdm(sale): Observable<Cats> {

    const params = sale;

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.put(`${URL}/cats/updatedadm/${sale._id}`, params, { headers });

  }

  updateBannerClicks(banner): Observable<Cats> {

    const params = banner;
    banner.clicks++;

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.put(`${URL}/faqstext/updatedadm/${banner._id}`, params, { headers });

  }

  updateSalefinal(sale): Observable<Cats> {

    const params = sale;

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.put(`${URL}/faqstext/update`, params, { headers });

  }

  // Eliminar Comercio
  eliminarCom(id: string): Observable<Cats> {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get(`${URL}/cats/delete/` + id, { headers });

  }

}





