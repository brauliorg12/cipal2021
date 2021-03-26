import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-networking',
  templateUrl: 'networking.page.html',
  styleUrls: ['networking.page.scss']
})
export class NetworkingPage implements OnInit {

  @ViewChild(IonContent, { static: true }) content: IonContent;

  public status = 'loading';
  activo = 1;
  list_net: Array<any>;
  public event: Event;
  usuario: any;

  constructor(
    private userService: UsuarioService,
    private dbService: UsuarioService,
    private router: Router,
    private storage: Storage
  ) {
    this.userService.validaToken().then(async response => {
      if (!response) {
        this.router.navigateByUrl('login');
      }
    });
  }


  ngOnInit() {

    this.storage.get('usuariocache')
      .then(async data => {
        if (data) {
          this.usuario = data;
          this.loadPage(this.event, 1);
        }
      }, (error) => {
        this.router.navigateByUrl('login');
      });
  }

  loadPage(event, activo: number) {

    if (activo === 1) {
      this.getList(event, true);
    }

    this.list_net = [];

    this.activo = activo;
  }

  getList(event?, pull: boolean = false) {

    this.dbService.getAllUsers(pull).toPromise()
      .then((dataDB: any) => {
        if (dataDB.ok) {
          this.list_net.push(...dataDB.data);

          this.status = 'ok';

          if (event) {
            event.target.complete();
          }

          if (dataDB.length === 0) {
            this.status = 'cero';
            this.activo = 0;
          }
        } else {
          this.status = 'cero';
        }
      }).catch(resp => {
        this.status = 'cero';
      });
  }

  goToChat(data: string) {
    this.router.navigateByUrl('chat/' + data);
  }

}
