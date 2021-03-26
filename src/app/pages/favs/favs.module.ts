import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavsPage } from './favs.page';

import { FavsRoutingModule } from './favs-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FavsRoutingModule
  ],
  declarations: [FavsPage]
})
export class FavsPageModule {}
