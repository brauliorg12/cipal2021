import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { ExpositoresService } from '../../../../services/expositores.service';
import { PopoverController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UiServiceService } from '../../../../services/ui-service.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-expositores-add',
  templateUrl: './expositores-add.page.html',
  styleUrls: ['./expositores-add.page.scss'],
})
export class ExpositoresAddPage {

  loading: any;

  public dataForm: FormGroup;

  // Cats
  customAlertOptionsBussines: any = {
    header: 'Categorías',
    subHeader: 'Seleccione una o más categorías.',
    translucent: true
  };

  cats: string[] = [
    'Maquinaria',
    'Nutrición',
    'Packaging'
  ];

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(
    private expoService: ExpositoresService,
    private router: Router,
    public formBuilder: FormBuilder,
    private uiService: UiServiceService,
    public popoverController: PopoverController,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {
    this.dataForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      descripcion: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.required
      ])),
      categoria: ['', Validators.required],
      img: ['', Validators.required],
      stand: ['', Validators.required],
      email: [''],
      telefono: [''],
      linkweb: [''],
      urlvideo: [''],
      urdadjunto: [''],
      etiquetas: [''],
    });
  }


  async presentToast() {
    this.uiService.toastGeneral('Expositor creado correctamente');
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      // tslint:disable-next-line: whitespace
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  // BACK
  async back() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: '¿Está seguro?, Se perderán todos los datos agregados.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Confirmar',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigateByUrl('/expositores-list');

            this.dataForm.reset();
          }
        }
      ]
    });

    await alert.present();
  }

  // ! CREATE
  async createData() {
    this.presentLoading('Creando Expositor...');
    // console.log(this.dataForm.value);

    await this.expoService
      .createExpositor(this.dataForm.value, this.file)
      .then(
        async res => {
          // console.log(res)
          if (res.data) {

            setTimeout(() => {
              this.router.navigateByUrl('/expositores-list');
              this.dataForm.reset();
              this.loading.dismiss();
            }, 800);

            this.photoSelected = '';
            this.ResetForm();

            await this.presentToast();
          }

        },
      );
  }

  // Reset
  ResetForm() {
    this.dataForm.reset();
  }

  async presentLoading(msg) {
    this.loading = await this.loadingController.create({
      message: msg
    });
    return await this.loading.present();
  }

}
