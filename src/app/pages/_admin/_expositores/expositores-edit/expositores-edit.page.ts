import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, PopoverController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UiServiceService } from '../../../../services/ui-service.service';
import { ExpositoresService } from '../../../../services/expositores.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-expositores-edit',
  templateUrl: './expositores-edit.page.html',
  styleUrls: ['./expositores-edit.page.scss'],
})
export class ExpositoresEditPage implements OnInit {


  file: File;
  photoSelected: string | ArrayBuffer;

  loading: any;

  public dataForm: FormGroup;

  dataDB: any = {};

  public status = 'loading';

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


  constructor(
    private expoService: ExpositoresService,
    private route: ActivatedRoute,
    public router: Router,
    public toastController: ToastController,
    public popoverController: PopoverController,
    public formBuilder: FormBuilder,
    private uiService: UiServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {
    this.dataForm = this.formBuilder.group({
      _id: [''],
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

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    const idCompany = this.route.snapshot.params['id'];
    if (idCompany) {
      this.getOffer(idCompany);
    }
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Datos modificados correctamente!',
      duration: 1000,
      position: 'bottom',
      cssClass: 'toast_connection'
    });
    toast.present();
  }

  getOffer(id: string) {

    this.expoService.getSaleAdm(id).toPromise().then(async response => {

      if (await response.ok) {

        this.dataDB = response.data;

        this.dataForm.patchValue({
          _id: this.dataDB._id,
          nombre: this.dataDB.nombre,
          descripcion: this.dataDB.descripcion,
          categoria: this.dataDB.categoria,
          stand: this.dataDB.stand,
          img: this.dataDB.img,
          email: this.dataDB.email,
          telefono: this.dataDB.telefono,
          linkweb: this.dataDB.linkweb,
          urlvideo: this.dataDB.urlvideo,
          urdadjunto: this.dataDB.urdadjunto,
          etiquetas: this.dataDB.etiquetas,
        });

        this.photoSelected = this.dataDB.img;

        this.status = 'ok';

      } else {
        this.status = 'error';
      }

    }).catch(err => {
      { console.log(err); }
    });
  }



  // UPDATE
  update() {
    this.presentLoading('Modificando datos...').then((value) => {

      this.expoService.updateExpo(this.dataForm.value, this.file).subscribe(async itemsLoad => {
        if (itemsLoad) {
          this.router.navigateByUrl('expositores-list');
          this.editToast();
          await this.loading.dismiss();
        } else {
          await this.loading.dismiss();
        }
      });

    });
  }

  // Premium
  premiumCommerce() {
    if (this.dataForm.get('premium').value === 'false') {
      this.dataForm.patchValue({
        premium: 'true',
      });
    }
    if (this.dataForm.get('premium').value === 'true') {
      this.dataForm.patchValue({
        premium: 'false',
      });
    }
  }


  async presentLoading(msg) {
    this.loading = await this.loadingController.create({
      message: msg
    });
    return await this.loading.present();
  }

}
