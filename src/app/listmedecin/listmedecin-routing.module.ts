import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListmedecinPage } from './listmedecin.page';

const routes: Routes = [
  {
    path: '',
    component: ListmedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListmedecinPageRoutingModule {}
