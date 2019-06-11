import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroCompraPage } from './cadastro-compra.page';
import { UsuarioService } from '../../servicos/usuarioService';
import { HttpModule } from '@angular/http';


const routes: Routes = [
  {
    path: '',
    component: CadastroCompraPage
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
  declarations: [CadastroCompraPage],
  providers: [UsuarioService],
})
export class CadastroCompraPageModule {}
