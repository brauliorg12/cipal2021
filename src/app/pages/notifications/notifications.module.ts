import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationsPage } from './notifications.page';

import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NotificationsRoutingModule
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
