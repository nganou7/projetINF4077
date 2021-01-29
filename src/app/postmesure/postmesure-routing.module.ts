import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostmesurePage } from './postmesure.page';

const routes: Routes = [
  {
    path: '',
    component: PostmesurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostmesurePageRoutingModule {}
