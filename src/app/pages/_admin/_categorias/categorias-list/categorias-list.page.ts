import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonContent } from '@ionic/angular';
import { Banner } from '../../../../classes/interface-banner';
import { Storage } from '@ionic/storage';
import { CatsService } from '../../../../services/cats.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.page.html',
  styleUrls: ['./categorias-list.page.scss'],
})
export class CategoriasListPage implements OnInit {

  @ViewChild(IonContent, { static: true }) content: IonContent;

  mysales: any[] = [];

  searchbutton = false;

  titulo: '';

  // Busqueda
  searchText: string;

  public refresh = false;

  // Buscar
  public search = 'loading';

  constructor(
    private catsService: CatsService,
    private storage: Storage,
  ) { }

  ionViewWillEnter() {

  }

  ngOnInit() {
    this.loadstorage();
  }

  loadstorage() {
    this.storage.get('cat_name').then(res => {
      if (res) {
        this.titulo = res;
        this.loadPage(res);
      }
    });
  }

  loadPage(name: string) {
    this.search = 'loading';
    this.refresh = true;
    this.cats(name);
  }

  cats(name: string) {

    this.catsService.getCatsList(name)
      .subscribe(resp => {
        this.mysales = resp.cats;

        console.log(resp);
        this.refresh = false;
        this.search = 'ok';
      });

  }


  ScrollToTop() {
    this.content.scrollToTop(1000);
  }

}


























