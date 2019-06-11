import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalhesCarroPage } from './detalhes-carro.page';
import { CarrosService } from '../../servicos/carrosService';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: DetalhesCarroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalhesCarroPage],
  providers: [CarrosService]
})
export class DetalhesCarroPageModule {}
