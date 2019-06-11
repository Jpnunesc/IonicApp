import { Component, OnInit } from '@angular/core';
import { MaisPage } from '../mais/mais.page';
import { DetalhesCarroPage } from '../detalhes-carro/detalhes-carro.page';
import { ModalController, NavController } from '@ionic/angular';
// import { NavController } from 'ionic-angular';
import { CarrosService } from '../../servicos/carrosService';
import { CarroModel } from '../../models/carros-model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-carros-antigos',
  templateUrl: './carros-antigos.page.html',
  styleUrls: ['./carros-antigos.page.scss'],
})
export class CarrosAntigosPage implements OnInit {
rootMais: any;
rootDetalhesCarros: any;
rootCarrosAntigos: any;
imagem = '';
Url = '';
tab1Root: any;
formCarro: CarroModel[] = new Array<CarroModel>();

constructor( public navCtrl: NavController,
   public modalCtrl: ModalController,
   public carroService: CarrosService) {
    this.tab1Root = MaisPage;
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
  this.carroService.searchSeminovos().subscribe(resp => {
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
public seminovos() {
  this.navCtrl.navigateRoot('/home');
}
public eventos() {
  this.navCtrl.navigateRoot('/eventos');
}

detalhes(id) {
  this.navCtrl.navigateRoot('/detalhesCarro/' + id);
}
}
