import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RifasPage } from './rifas.page';
import { RifasService } from '../../servicos/rifasService';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: RifasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpModule

  ],
  declarations: [RifasPage],
  providers: [RifasService]
})
export class RifasPageModule {}
