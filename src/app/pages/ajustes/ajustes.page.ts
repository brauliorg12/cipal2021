import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Usuario } from '../../classes/interfaces';

@Component({
  selector: 'app-ajustes',
  templateUrl: 'ajustes.page.html',
  styleUrls: ['ajustes.page.scss']
})
export class Tab3Page {

  status = 'loading';
  role = 'user';

  constructor(
    private storage: Storage,
  ) { }

  ionViewWillEnter() {
    this.status = 'loading';
    this.storage.get('usuariocache')
      .then(async data => {
        if (data) {

          this.role = data.role;
          this.status = 'login';

        } else {
          this.status = 'nologin'
        }

      }, (error) => {
        this.status = 'nologin'
      });

  }
}
