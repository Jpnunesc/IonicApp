import { Component, OnInit, ViewChild } from '@angular/core';
import { CarroModel } from '../../models/carros-model';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CarrosService } from '../../servicos/carrosService';
import { environment } from '../../environments/environment';
import { ImagemModel } from '../../models/ImagemModel';

@Component({
  selector: 'app-detalhes-carro',
  templateUrl: './detalhes-carro.page.html',
  styleUrls: ['./detalhes-carro.page.scss'],
})
export class DetalhesCarroPage implements OnInit {

  mes = '';
  Url: string;
  formCarro: CarroModel = new CarroModel();
  imagem = [];
  voltarAntigos = false;
  voltarSeminovo = false;
  @ViewChild('mySlider') mySlider: any;
  mySlideOptions = {
    pager: true
  };
  constructor(public navCtrl: NavController, private route: ActivatedRoute, private carrosService: CarrosService) {

    this.Url = environment.urlImg;
  }

  ngOnInit() {
    this.prepararPagina();
  }
  prepararPagina() {
    if (this.route.params) {
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.buscarEventosMes(params['id']);
        }
      });
    }
  }
  slideNext() {
    this.mySlider.slideNext();
  }

  slidePrev() {
    this.mySlider.slidePrev();
  }
  buscarEventosMes(id) {
    this.carrosService.BuscarDetalhesCarro(id).subscribe(resp => {
      if (resp.success) {
        this.formCarro = resp.object;
        this.formCarro.Imagem = [];
        for (let i = 0; i < resp.object.imagem.length; i++) {
          this.imagem.push(new ImagemModel({
            caminho: this.Url + resp.object.imagem[i].caminho,
            id: resp.object.imagem[i].id,
            carro: resp.object.imagem[i].carro,
          }));
        }
        this.definirBtnVoltar();
      }
    });
  }
  definirBtnVoltar() {
    if (this.formCarro.carroAntigo) {
      this.voltarAntigos = true;
    } else {
      this.voltarSeminovo = true;
    }
  }
  antigos() {
    this.navCtrl.navigateRoot('/home');
  }
  seminovos() {
    this.navCtrl.navigateRoot('/carrosAntigos');
  }
  public eventos() {
    this.navCtrl.navigateRoot('/eventos');
  }
}
