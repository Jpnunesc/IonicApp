import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventosMesPage } from './eventos-mes.page';
import { EventoService } from '../../servicos/eventoService';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: EventosMesPage
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
  declarations: [EventosMesPage],
  providers: [EventoService]
})
export class EventosMesPageModule {}
