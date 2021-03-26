import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


import { ConferencistasAddPage } from './conferencistas-add.page';

const routes: Routes = [
  {
    path: '',
    component: ConferencistasAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConferencistasAddPage]
})
export class ConferencistasAddPageModule { }
