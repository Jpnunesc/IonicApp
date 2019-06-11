import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarrosAntigosPage } from './carros-antigos.page';
import { CarrosService } from '../../servicos/carrosService';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: CarrosAntigosPage
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
  declarations: [CarrosAntigosPage],
  providers: [CarrosService],
})
export class CarrosAntigosPageModule {}
