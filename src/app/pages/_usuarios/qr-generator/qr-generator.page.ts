import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
})
export class QrGeneratorPage {

  @ViewChild('qr', { static: true }) qrInput;

  miQrText: string;

  public login = 'loading';

  constructor(
    private storage: Storage
  ) {


  }

  ionViewWillEnter() {
    this.login = 'loading';
    this.storage.get('usuariocache')
      .then(async data => {
        if (data) {

          this.login = 'login';
          setTimeout(() => {
            this.miQrText = data.email;
          }, 400);


        } else {
          this.login = 'nologin';
        }

      }, (error) => {
        this.login = 'nologin';
      });

  }

}
