import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClavePageRoutingModule } from './clave-routing.module';

import { ClavePage } from './clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClavePageRoutingModule
  ],
  declarations: [ClavePage]
})
export class ClavePageModule {}
