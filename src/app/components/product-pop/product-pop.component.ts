import { Component } from '@angular/core';
import { NavParamsService } from 'src/app/services/nav-params.service';
import { Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';
import { UiServiceService } from '../../services/ui-service.service';
import { ExpositoresService } from '../../services/expositores.service';
import { ConferencistasService } from '../../services/conferencistas.service';

@Component({
  selector: 'app-product-pop',
  templateUrl: './product-pop.component.html',
  styleUrls: ['./product-pop.component.scss'],
})
export class ProductPopComponent {
  data: any;

  constructor(
    private params: NavParamsService,
    private router: Router,
    public popoverController: PopoverController,
    private uiService: UiServiceService,
    public alertController: AlertController,
    private expoService: ExpositoresService,
    private confService: ConferencistasService
  ) {
    this.data = this.params.GetParam;
  }

  editar() {
    if (this.data.type === 'expositor') {
      this.router.navigateByUrl('expositor-edit/' + this.data.p._id);
    }

    if (this.data.type === 'conferencista') {
      this.router.navigateByUrl('conferencista-edit/' + this.data.p._id);
    }

    this.popoverController.dismiss();
  }

  async delete() {
    let header = 'Eliminar Expositor';
    if (this.data.type === 'conferencista') {
      header = 'Eliminar Conferencista';
    }

    const alert = await this.alertController.create({
      header: header,
      message: 'Está seguro?, no podrá volver a recuperarlo',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.popoverController.dismiss();
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            if (this.data.type === 'conferencista') {
              this.eliminarConf();
            } else {
              this.eliminar();
            }


          }
        }
      ]
    });

    await alert.present();
  }

  async eraseToast() {
    this.uiService.presentToast('Expositor Eliminado');
  }

  // !DELETE
  async eliminar() {

    this.expoService.eliminarData(this.data.p._id).subscribe(response => {

      if (response) {
        this.router.navigateByUrl('expositores-list');

        this.eraseToast();
        this.popoverController.dismiss();
      }

    });
  }

  async eliminarConf() {

    this.confService.eliminarData(this.data.p._id).subscribe(response => {

      if (response) {
        this.router.navigateByUrl('conferencistas-list');

        this.eraseToast();
        this.popoverController.dismiss();
      }

    });
  }

}
