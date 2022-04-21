import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemplomodalPageRoutingModule } from './ejemplomodal-routing.module';

import { EjemplomodalPage } from './ejemplomodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemplomodalPageRoutingModule
  ],
  declarations: [EjemplomodalPage]
})
export class EjemplomodalPageModule {}
