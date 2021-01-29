import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostmesurePageRoutingModule } from './postmesure-routing.module';

import { PostmesurePage } from './postmesure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostmesurePageRoutingModule
  ],
  declarations: [PostmesurePage]
})
export class PostmesurePageModule {}
