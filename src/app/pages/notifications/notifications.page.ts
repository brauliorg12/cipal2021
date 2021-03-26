import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class NotificationsPage implements OnInit {

  @ViewChild(IonContent, { static: true }) content: IonContent;

  public status = 'loading';
  activo = 1;
  list_net: Array<any>;
  public event: Event;
  usuario: any;

  constructor(
    private dbService: UsuarioService,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.loadPage(this.event, 1);

    this.storage.get('usuariocache')
      .then(async data => {
        if (data) {
          this.usuario = data;
        }
      }, (error) => {
        
      });
  }

  getList(event?, pull: boolean = false) {

    this.dbService.getAllUsers(pull).toPromise()
      .then((dataDB: any) => {
        if (dataDB.ok) {
          this.list_net.push(...dataDB.data);

          this.status = 'cero';

          if (event) {
            event.target.complete();
          }

          if (dataDB.length === 0) {
            this.activo = 0;
          }
        }
      });
  }

  goToChat(data: string) {
    this.router.navigateByUrl('chat/' + data);
  }

  loadPage(event, activo: number) {

    if (activo === 1) {
      this.getList(event, true);
    }

    this.list_net = [];

    this.activo = activo;
  }

}
