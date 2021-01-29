import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homeapp',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'homeapp',
    loadChildren: () => import('./homeapp/homeapp.module').then( m => m.HomeappPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mappage',
    loadChildren: () => import('./mappage/mappage.module').then( m => m.MappagePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'postmesure',
    loadChildren: () => import('./postmesure/postmesure.module').then( m => m.PostmesurePageModule)
  },
  {
    path: 'listmedecin',
    loadChildren: () => import('./listmedecin/listmedecin.module').then( m => m.ListmedecinPageModule)
  },
  {
    path: 'homemenue',
    loadChildren: () => import('./homemenue/homemenue.module').then( m => m.HomemenuePageModule)
  },
  {
    path: 'conseil',
    loadChildren: () => import('./conseil/conseil.module').then( m => m.ConseilPageModule)
  },
  {
    path: 'mesure',
    loadChildren: () => import('./mesure/mesure.module').then( m => m.MesurePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
