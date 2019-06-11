import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'mais', loadChildren: './mais/mais.module#MaisPageModule' },
  { path: 'detalhesCarro/:id', loadChildren: './detalhes-carro/detalhes-carro.module#DetalhesCarroPageModule' },
  { path: 'carrosAntigos', loadChildren: './carros-antigos/carros-antigos.module#CarrosAntigosPageModule' },
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'rifas', loadChildren: './rifas/rifas.module#RifasPageModule' },
  { path: 'eventos-mes/:id', loadChildren: './eventos-mes/eventos-mes.module#EventosMesPageModule' },
  { path: 'ParticipaRifa/:id', loadChildren: './participa-rifa/participa-rifa.module#ParticipaRifaPageModule' },
  { path: 'Participantes', loadChildren: './participantes/participantes.module#ParticipantesPageModule' },
  { path: 'ComprarRifa', loadChildren: './comprar-rifa/comprar-rifa.module#ComprarRifaPageModule' },
  { path: 'CadastroCompra/:id', loadChildren: './cadastro-compra/cadastro-compra.module#CadastroCompraPageModule' },
  // { path: 'Detail', loadChildren: './detail/detail.module#DetailPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
