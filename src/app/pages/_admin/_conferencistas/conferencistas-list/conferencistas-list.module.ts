import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Busqueda
import { ConferencistasListPage } from './conferencistas-list.page';
import { PipesModuleModule } from '../../../../pipes/pipes-module.module';

const routes: Routes = [
  {
    path: '',
    component: ConferencistasListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConferencistasListPage]
})
export class ConferencistasListPageModule { }
