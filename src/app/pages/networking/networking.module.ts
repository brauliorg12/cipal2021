import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NetworkingPage } from './networking.page';

import { NetworkingRoutingModule } from './networking-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NetworkingRoutingModule
  ],
  declarations: [NetworkingPage]
})
export class NetworkingPageModule {}
