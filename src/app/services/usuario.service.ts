import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Usuario, RespuestaUser } from '../classes/interfaces';
import { NavController, Platform } from '@ionic/angular';
// import { Facebook } from '@ionic-native/facebook/ngx';
// import { NetworkService, ConnectionStatus } from './network.service';
// import { AngularFireAuth } from '@angular/fire/auth';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  paginado = 0;

  token: string = null;
  private usuario: Usuario = {};

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController,
    // private fb: Facebook,
    private platform: Platform,
    // private afAuth: AngularFireAuth,
  ) { }


  login(email: string, password: string) {

    const data = { email, password };

    return new Promise(resolve => {

      this.http.post(`${URL}/users_cipal/login`, data)
        .subscribe(async resp => {


          if (resp['ok']) {
            await this.guardarToken(resp['token']);

            const user = {
              _id: resp['_id'],
              nombre: resp['nombre'],
              email: resp['email'],
              avatar: resp['avatar'],
              fb: 'false',
              role: resp['role'],
            };
            this.storage.set('usuariocache', user);

            resolve(true);
          } else {
            this.token = null;
            this.storage.remove('token');
            resolve(false);
          }

        });

    });

  }

  getAllUsers(pull: boolean = false) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    if (pull) {
      this.paginado = 0;
    }

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admusers/?pagina=${this.paginado}`, { headers });

  }

  getUser(data: string) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/get_user/` + data, { headers });
  }

  async logout() {

    return new Promise(async resolve => {

      this.token = null;
      this.usuario = {};
      await this.storage.remove('token');
      await this.storage.remove('version');
      await this.storage.remove('commerce_id');
      await this.storage.remove('filter');
      await this.storage.remove('user');
      await this.storage.remove('usuariocache');
      await this.storage.remove('dark');
      await this.navCtrl.navigateRoot('/inicio', { animated: true }).then(resp => {
        resolve(true);
      });

    }).catch(err => {
      alert(err);
    });
  }

  registro(usuario: Usuario) {

    return new Promise(resolve => {

      this.http.post(`${URL}/users_cipal/create`, usuario)
        .subscribe(async resp => {

          if (resp['ok']) {
            await this.guardarToken(resp['token']);

            const user = {
              _id: resp['_id'],
              nombre: resp['nombre'],
              email: resp['email'],
              avatar: resp['avatar'],
              fb: 'false',
              role: resp['role'],
            };
            this.storage.set('usuariocache', user);

            resolve(true);
          } else {
            this.token = null;
            this.storage.remove('token');
            resolve(false);
          }

        });


    });


  }

  // !Admin users Modal
  getUsers() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admusers`, { headers });

  }

  // Admin all users
  getUsersAll(pull: boolean = false) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    if (pull) {
      this.paginado = 0;
    }

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admusers/?pagina=${this.paginado}`, { headers });

  }


  // Admin users by date
  getUsersAllByDate(fecha_init: any, fecha_fin: any) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admusersa/` + fecha_init + '/' + fecha_fin, { headers });

  }

  getUsersPageByDate(pull: boolean = false) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    if (pull) {
      this.paginado = 0;
    }

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admusersa/?pagina=${this.paginado}`, { headers });

  }

  // ! TOTAL
  getUsersTotal() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admuserstotal`, { headers });

  }

  getUsersTotalFb() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admusersfb`, { headers });

  }

  getUsersTotalEm() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admusersem`, { headers });

  }

  getUsersTotalLS() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admusersat`, { headers });

  }

  getUsersTotalRegT() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaUser>(`${URL}/users_cipal/admuserstreg`, { headers });

  }



  getUsuario() {

    if (!this.usuario._id) {
      this.validaToken();
    }

    return { ...this.usuario };

  }


  searchUsers(busqueda: string, pull: boolean = false) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    if (pull) {
      this.paginado = 0;
    }

    this.paginado++;

    return this.http.get<RespuestaUser>(`${URL}/search/usuarios/` + busqueda + `?pagina=${this.paginado}`, { headers });

  }


  async guardarToken(token: string) {

    this.token = token;
    await this.storage.set('token', token);

    await this.validaToken();


  }

  async cargarToken() {

    this.token = await this.storage.get('token') || null;

  }


  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if (!this.token) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }


    return new Promise<boolean>(resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });


      this.http.get(`${URL}/users_cipal/`, { headers })
        .subscribe(async resp => {

          if (resp['ok']) {
            this.usuario = resp['usuario'];

            this.storage.get('usuariocache')
              .then(async (data) => {
                const user = {
                  _id: this.usuario._id,
                  nombre: this.usuario.nombre,
                  email: this.usuario.email,
                  role: this.usuario.role
                };
                this.storage.set('usuariocache', user);
              });

            resolve(true);
          } else {
            this.token = null;
            this.usuario = {};
            await this.storage.remove('token');
            await this.storage.remove('version');
            await this.storage.remove('commerce_id');
            await this.storage.remove('filter');
            await this.storage.remove('user');
            await this.storage.remove('usuariocache');
            await this.storage.remove('dark');
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }

        });

    });

  }

  // Token ADMINS

  async validaTokenAdm(): Promise<boolean> {

    await this.cargarToken();

    if (!this.token) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }


    return new Promise<boolean>(resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });


      this.http.get(`${URL}/users_cipal/gadmin/`, { headers })
        .subscribe(async resp => {

          if (resp['ok']) {
            this.usuario = resp['usuario'];

            this.storage.get('usuariocache')
              .then(async (data) => {
                const user = {
                  _id: this.usuario._id,
                  nombre: this.usuario.nombre,
                  email: this.usuario.email,
                  role: this.usuario.role
                };
                this.storage.set('usuariocache', user);
              });

            resolve(true);
          } else {
            this.token = null;
            this.usuario = {};
            await this.storage.remove('token');
            await this.storage.remove('version');
            await this.storage.remove('commerce_id');
            await this.storage.remove('filter');
            await this.storage.remove('user');
            await this.storage.remove('usuariocache');
            await this.storage.remove('dark');
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }

        });

    });

  }



  actualizarUsuario(usuario: Usuario) {


    const headers = new HttpHeaders({
      'x-token': this.token
    });


    return new Promise(resolve => {

      this.http.post(`${URL}/users_cipal/update`, usuario, { headers })
        .subscribe(resp => {

          if (resp['ok']) {
            this.guardarToken(resp['token']);
            resolve(true);

          } else {
            resolve(false);
          }

        });

    });

  }

}
