import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Commerce } from '../../../../classes/interfaces';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import { ConferencistasService } from '../../../../services/conferencistas.service';
import { ProductPopComponent } from '../../../../components/product-pop/product-pop.component';
import { PopoverController } from '@ionic/angular';
import { NavParamsService } from '../../../../services/nav-params.service';

@Component({
  selector: 'app-conferencistas-list',
  templateUrl: './conferencistas-list.page.html',
  styleUrls: ['./conferencistas-list.page.scss'],
})
export class ConferencistasListPage {

  dataDB: any[];
  habilitado = true;

  commerce: Commerce = {};

  // Busqueda
  searchText: string;

  public today = moment(new Date).format('YYYYMMDD');

  public status = 'loading';


  // Evento Principal
  public event: Event;

  constructor(
    private router: Router,
    public storage: Storage,
    private confService: ConferencistasService,
    public popoverController: PopoverController,
    public params: NavParamsService,
  ) { }


  ionViewWillEnter() {
    this.recargarms();
  }

  convertFormat(date) {
    return moment(date).format('YYYYMMDD');
  }

  recargarms() {
    this.siguientesms();
    this.habilitado = true;
    this.dataDB = [];
  }

  siguientesms() {
    this.status = 'loading';
    this.dataDB = [];

    this.confService.getConferencistas().subscribe(resp => {

      if (resp.data && resp.data.length >= 1) {


        this.dataDB.push(...resp.data);
        console.log(resp);


        this.status = 'ok';

      } else {
        this.status = 'cero';
      }

    });



  }

  addNew() {
    this.router.navigateByUrl('conferencista-add');
  }

  async presentPopover(ev: any, p: any) {

    const data = {
      p: p,
      type: 'conferencista'
    };

    this.params.SetParam = data;
    const popover = await this.popoverController.create({
      component: ProductPopComponent,
      event: ev,
      translucent: true,
      cssClass: 'pop_product',
    });
    return await popover.present();
  }

}
