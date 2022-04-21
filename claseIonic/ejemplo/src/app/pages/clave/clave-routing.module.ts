import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClavePage } from './clave.page';

const routes: Routes = [
  {
    path: '',
    component: ClavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClavePageRoutingModule {}
