import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriasListPage } from './categorias-list.page';
import { PipesModuleModule } from '../../../../pipes/pipes-module.module';

const routes: Routes = [
  {
    path: '',
    component: CategoriasListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModuleModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriasListPage]
})
export class CategoriasListPageModule { }
