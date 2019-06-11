import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComprarRifaPage } from './comprar-rifa.page';

const routes: Routes = [
  {
    path: '',
    component: ComprarRifaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComprarRifaPage]
})
export class ComprarRifaPageModule {}
