import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercadePageRoutingModule } from './acercade-routing.module';

import { AcercadePage } from './acercade.page';
import { EjemplomodalPageModule } from '../ejemplomodal/ejemplomodal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //EjemplomodalPageModule,
     AcercadePageRoutingModule
     ,EjemplomodalPageModule
   
    
  ],
  declarations: [AcercadePage]
})
export class AcercadePageModule {}
