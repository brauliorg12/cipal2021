import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UiServiceService } from '../../../../services/ui-service.service';
import { CatsService } from '../../../../services/cats.service';

@Component({
  selector: 'app-categorias-add',
  templateUrl: './categorias-add.page.html',
  styleUrls: ['./categorias-add.page.scss'],
})
export class CategoriasAddPage implements OnInit {

  public catsForm: FormGroup;

  loading: any;

  // ! Cats
  public cats: string[] = [
    'comercio',
    'profesional',
    'servicio'
  ];

  positionAlertOptions: any = {
    header: 'Elige un tipo',
    subHeader: 'Padres de categorías',
    translucent: true
  };


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private uiService: UiServiceService,
    private stextService: CatsService,
    public loadingController: LoadingController
  ) {
    this.catsForm = this.formBuilder.group({
      status: [true, Validators.required],
      tipo: ['', Validators.required],
      nombre: ['', Validators.required],
      tags: ['', Validators.required],
      isadmin: [false, Validators.required]
    });
  }


  ngOnInit() { }


  // ! NEW Banner
  async createBanner() {
    this.presentLoading('Creando Categoría...');


    // ! Tipo
    if (this.catsForm.get('tipo').value === 'comercio') {
      this.catsForm.patchValue({
        tipo: 'comercio'
      });
    }

    if (this.catsForm.get('tipo').value === 'profesional') {
      this.catsForm.patchValue({
        tipo: 'profesional'
      });
    }

    if (this.catsForm.get('tipo').value === 'servicio') {
      this.catsForm.patchValue({
        tipo: 'servicio'
      });
    }

    // console.log('form: ', this.catsForm.value);

    await this.stextService
      .createCat(this.catsForm.value)
      .then(
        res => {

          if (res) {
            this.loading.dismiss();
            // !this.refreshEvent.Page();


            this.router.navigateByUrl('/admin-categorias');

            this.presentToast();
            this.ResetForm();
          }

        },
        err => console.log(err)
      );
    return false;
  }

  // Status
  statusCommerce() {
    if (this.catsForm.get('status').value === 'false') {
      this.catsForm.patchValue({
        status: 'true',
      });
    }
    if (this.catsForm.get('status').value === 'true') {
      this.catsForm.patchValue({
        status: 'false',
      });
    }
  }

  // Status
  btnCommerce() {
    if (this.catsForm.get('isadmin').value === 'false') {
      this.catsForm.patchValue({
        isadmin: 'true',
      });
    }
    if (this.catsForm.get('isadmin').value === 'true') {
      this.catsForm.patchValue({
        isadmin: 'false',
      });
    }
  }

  // Reset
  ResetForm() {
    this.catsForm.reset();
  }

  async presentToast() {
    this.uiService.toastGeneral('Texto creado correctamente');
  }

  async presentLoading(msg) {
    this.loading = await this.loadingController.create({
      message: msg
    });
    return await this.loading.present();
  }

}
