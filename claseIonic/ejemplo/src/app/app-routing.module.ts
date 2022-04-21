import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./pages/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'clave',
    loadChildren: () => import('./pages/clave/clave.module').then( m => m.ClavePageModule)
  },
  {
    path: 'segunda/:parametro',
    loadChildren: () => import('./pages/segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'ejemplomodal',
    loadChildren: () => import('./pages/ejemplomodal/ejemplomodal.module').then( m => m.EjemplomodalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
