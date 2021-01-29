import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemenuePage } from './homemenue.page';

const routes: Routes = [
  {
    path: '',
    component: HomemenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemenuePageRoutingModule {}
