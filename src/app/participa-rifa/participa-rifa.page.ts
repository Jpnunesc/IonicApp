import { Component, OnInit } from '@angular/core';
import { RifasModel } from '../../models/rifasModel';
import { NavController, ModalController } from '@ionic/angular';
import { RifasService } from '../../servicos/rifasService';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participa-rifa',
  templateUrl: './participa-rifa.page.html',
  styleUrls: ['./participa-rifa.page.scss'],
})

export class ParticipaRifaPage implements OnInit {
  formRifa: RifasModel = new RifasModel();
  Url = '';
  idRifa: number;
  aceito: boolean;
  imagem: string;
  sorteioB = false;
  cotasB = false;
  pagamentosB = false;
  regulamento = false;
  disposicoesB = false;
  entregaB = false;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    private rifasSevice: RifasService,
    private route: ActivatedRoute) {
    this.Url = environment.urlImg;
  }
  ngOnInit() {
    this.prepararPagina();
  }
  prepararPagina() {
    if (this.route.params) {
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.buscarRifa(params['id']);
        }
      });
    }
    this.aceito = false;
  }
  mostrarSorteio() {
    if (this.sorteioB === false) {
      this.sorteioB = true;
    } else {
      this.sorteioB = false;
    }
  }
  mostrarDisposicoes() {
    if (this.disposicoesB === false) {
      this.disposicoesB = true;
    } else {
      this.disposicoesB = false;
    }
  }
  mostrarEntrega() {
    if (this.entregaB === false) {
      this.entregaB = true;
    } else {
      this.entregaB = false;
    }
  }
  mostarPagamentos() {
    if (this.pagamentosB === false) {
      this.pagamentosB = true;
    } else {
      this.pagamentosB = false;
    }
  }
  mostrarCotas() {
    if (this.cotasB === false) {
      this.cotasB = true;
    } else {
      this.cotasB = false;
    }
  }
  buscarRifa(id) {
    this.idRifa = id;
    this.rifasSevice.buscarRifa(id).subscribe(resp => {
      console.log(resp);
      if (resp.success) {
        this.imagem = this.Url + resp.object.imagem;
        this.formRifa = resp.object;
      }
    });
  }
  voltar() {
    this.navCtrl.navigateRoot('/rifas');
  }
  participantes() {
    this.navCtrl.navigateRoot('/Participantes');
  }
  CadastroUsuario() {
    this.navCtrl.navigateRoot('/CadastroCompra/' + this.idRifa);
  }
}
