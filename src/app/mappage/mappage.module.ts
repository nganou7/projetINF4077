import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MappagePageRoutingModule } from './mappage-routing.module';

import { MappagePage } from './mappage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MappagePageRoutingModule
  ],
  declarations: [MappagePage]
})
export class MappagePageModule {}
