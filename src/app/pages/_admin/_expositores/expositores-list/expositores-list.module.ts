import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Busqueda
import { ExpositoresListPage } from './expositores-list.page';
import { PipesModuleModule } from '../../../../pipes/pipes-module.module';

const routes: Routes = [
  {
    path: '',
    component: ExpositoresListPage
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
  declarations: [ExpositoresListPage]
})
export class ExpositoresListPageModule { }
