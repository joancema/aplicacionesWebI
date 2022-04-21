import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionPageRoutingModule } from './seccion-routing.module';

import { SeccionPage } from './seccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionPageRoutingModule
  ],
  declarations: [SeccionPage]
})
export class SeccionPageModule {}
