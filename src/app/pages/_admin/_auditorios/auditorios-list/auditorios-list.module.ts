import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Busqueda
import { AuditoriosListPage } from './auditorios-list.page';
import { PipesModuleModule } from '../../../../pipes/pipes-module.module';

const routes: Routes = [
  {
    path: '',
    component: AuditoriosListPage
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
  declarations: [AuditoriosListPage]
})
export class AuditoriosListPageModule { }
