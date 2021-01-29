import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MappagePage } from './mappage.page';

const routes: Routes = [
  {
    path: '',
    component: MappagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MappagePageRoutingModule {}
