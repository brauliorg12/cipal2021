import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import { ProductPopComponent } from '../../../../components/product-pop/product-pop.component';
import { PopoverController } from '@ionic/angular';
import { NavParamsService } from '../../../../services/nav-params.service';
import { ExpositoresService } from '../../../../services/expositores.service';

@Component({
  selector: 'app-expositores-list',
  templateUrl: './expositores-list.page.html',
  styleUrls: ['./expositores-list.page.scss'],
})
export class ExpositoresListPage {

  dataDB: any[];
  habilitado = true;

  // Busqueda
  searchText: string;

  public today = moment(new Date).format('YYYYMMDD');

  public status = 'loading';


  // Evento Principal
  public event: Event;

  constructor(
    private router: Router,
    public storage: Storage,
    private expoService: ExpositoresService,
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

    this.expoService.getExpositores().subscribe(resp => {

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
    this.router.navigateByUrl('expositor-add');
  }

  async presentPopover(ev: any, p: any) {

    const data = {
      p: p,
      type: 'expositor'
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
