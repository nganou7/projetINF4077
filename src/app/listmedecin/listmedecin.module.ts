import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListmedecinPageRoutingModule } from './listmedecin-routing.module';

import { ListmedecinPage } from './listmedecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListmedecinPageRoutingModule
  ],
  declarations: [ListmedecinPage]
})
export class ListmedecinPageModule {}
