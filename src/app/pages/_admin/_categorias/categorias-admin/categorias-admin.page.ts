import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../../../services/cats.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-categorias-admin',
  templateUrl: './categorias-admin.page.html',
  styleUrls: ['./categorias-admin.page.scss'],
})
export class CategoriasAdmPage implements OnInit {

  total_com: number;
  search_com = 'loading';

  total_prof: number;
  search_prof = 'loading';

  total_serv: number;
  search_serv = 'loading';

  constructor(
    private stextService: CatsService,
    private router: Router,
    private storage: Storage
  ) { }

  ionViewWillEnter() {

    this.load();
  }

  ngOnInit() {

  }

  load() {
    this.totalCom();
    this.totalProf();
    this.totalServ();
  }

  totalCom() {
    this.search_com = 'loading';
    this.stextService.getTotalCom().subscribe(resp => {
      if (resp) {
        this.total_com = resp.total;
        this.search_com = 'ok';
      }
    });
  }

  totalProf() {
    this.search_prof = 'loading';
    this.stextService.getTotalProf().subscribe(resp => {
      if (resp) {
        this.total_prof = resp.total;
        this.search_prof = 'ok';
      }
    });
  }

  totalServ() {
    this.search_serv = 'loading';
    this.stextService.getTotalServ().subscribe(resp => {
      if (resp) {
        this.total_serv = resp.total;
        this.search_serv = 'ok';
      }
    });
  }

  goto(name: string) {
    this.storage.set('cat_name', name);
    this.router.navigateByUrl('/categorias-list');
  }

}
