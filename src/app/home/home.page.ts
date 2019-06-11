import { Component } from '@angular/core';
import { MaisPage } from '../mais/mais.page';
import { DetalhesCarroPage } from '../detalhes-carro/detalhes-carro.page';
import { CarrosAntigosPage } from '../carros-antigos/carros-antigos.page';
import { NavController, ModalController } from '@ionic/angular';
import { CarrosService } from '../../servicos/carrosService';
import { CarroModel } from '../../models/carros-model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
rootMais: any;
rootDetalhesCarros: any;
rootCarrosAntigos: any;
imagem = '';
Url = '';
formCarro: CarroModel[] = new Array<CarroModel>();

constructor( public navCtrl: NavController,
   public modalCtrl: ModalController,
   public carroService: CarrosService) {
this.rootMais = MaisPage;
this.rootDetalhesCarros = DetalhesCarroPage;
this.rootCarrosAntigos = CarrosAntigosPage;
this.Url = environment.urlImg;
}
// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {
  this.search() ;
}
 search() {
  this.carroService.searchAntigos().subscribe(resp => {
    if (resp.success) {
      for (let i = 0; i < resp.object.length; i ++) {
        this.formCarro.push( new CarroModel({
          caminhoImagem: this.Url + resp.object[i].caminhoImagem,
          id: resp.object[i].id,
          marca:  resp.object[i].marca,
          modelo: resp.object[i].modelo,
          preco: resp.object[i].preco
        }));
      }
      console.log(this.formCarro);
    }
  });
 }
public navegar() {
}
public antigos() {
  this.navCtrl.navigateRoot('/carrosAntigos');
}
public eventos() {
  this.navCtrl.navigateRoot('/eventos');
}
detalhes(id) {
  this.navCtrl.navigateRoot('/detalhesCarro/' + id);
}
}
