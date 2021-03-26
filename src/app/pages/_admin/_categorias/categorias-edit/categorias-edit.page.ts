import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsApp } from '../../../../services/events.service';
import { UiServiceService } from '../../../../services/ui-service.service';
import { Banner, Usuario } from '../../../../classes/interface-banner';
import { UsuarioService } from '../../../../services/usuario.service';
import { CatsService } from '../../../../services/cats.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-categorias-edit',
  templateUrl: './categorias-edit.page.html',
  styleUrls: ['./categorias-edit.page.scss'],
})
export class CategoriasEditPage implements OnInit {

  loading: any;
  commerce: Banner = {};
  usuario: Usuario = {};

  public catsForm: FormGroup;

  public status = 'loading';


  // ! Location
  public redirect: string[] = [
    'Interno',
    'Externo'
  ];

  public linkext = false;

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

  btn = false;

  async presentToast() {
    this.uiService.toastGeneral('Texto Actualizado!');
  }


  async eraseToast() {
    this.uiService.presentToast('Texto Eliminado');
  }

  constructor(
    private catsService: CatsService,
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UiServiceService,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    public alertController: AlertController,
    private refreshEvent: EventsApp
  ) {
    this.catsForm = this.formBuilder.group({
      _id: [''],
      status: ['', Validators.required],
      tipo: ['', Validators.required],
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      tags: ['', Validators.required],
      isadmin: ['', Validators.required]
    });
  }

  ionViewWillEnter() {
    this.usuario = this.usuarioService.getUsuario();
  }


  ngOnInit() {
    this.loadPage();

    this.usuario = this.usuarioService.getUsuario();

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

  async delete() {
    const alert = await this.alertController.create({
      header: 'Borrar Categoría!',
      message: 'Está seguro?, no podrá volver a recuperarla.!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.eliminar();
          }
        }
      ]
    });

    await alert.present();
  }

  // !DELETE
  async eliminar() {

    this.status = 'loading';
    this.catsService.eliminarCom(this.commerce._id).subscribe(response => {

      if (response) {
        this.router.navigateByUrl('faqs-texts-admin');

        this.eraseToast();

        this.refreshEvent.action.subscribe(event => { });
      }


    });
  }


  getMySale(id) {
    this.catsService.getSaleAdm(id).subscribe(postLoad2 => {
      console.log(postLoad2.cats);
      this.commerce = postLoad2.cats;


      if (postLoad2) {
        this.catsForm.patchValue({
          _id: postLoad2.cats._id,
          status: postLoad2.cats.status,
          usuario: postLoad2.cats.usuario,

          tags: postLoad2.cats.tags,
          nombre: postLoad2.cats.nombre,
          tipo: postLoad2.cats.tipo,
          isadmin: postLoad2.cats.isadmin,
        });

        // ! USUARIO
        this.catsForm.patchValue({
          usuario: this.usuario._id
        });


        this.status = 'ok';
      }


    });
  }

  loadPage() {
    const idCompany = this.route.snapshot.params['id'];
    this.getMySale(idCompany);
  }

  // UPDATE
  updateBanner() {
    this.presentLoading('Cargando');

    this.catsService.updateSaleAdm(this.catsForm.value).subscribe(itemsLoad => {
      this.router.navigateByUrl('admin-categorias');


      this.loading.dismiss();
      this.presentToast();
    });
  }

  async presentLoading(msg) {
    this.loading = await this.loadingController.create({
      message: msg
    });
    return await this.loading.present();
  }

}
