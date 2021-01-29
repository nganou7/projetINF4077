import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemenuePageRoutingModule } from './homemenue-routing.module';

import { HomemenuePage } from './homemenue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemenuePageRoutingModule
  ],
  declarations: [HomemenuePage]
})
export class HomemenuePageModule {}
