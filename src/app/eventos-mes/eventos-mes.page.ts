import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from '../../servicos/eventoService';
import { EventoModel } from '../../models/EventoModel';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-eventos-mes',
  templateUrl: './eventos-mes.page.html',
  styleUrls: ['./eventos-mes.page.scss'],
})
export class EventosMesPage implements OnInit {
  mes = '';
  Url: string;
  formEvento: EventoModel[] = new Array<EventoModel>();
  constructor(public navCtrl: NavController, private route: ActivatedRoute, private eventoService: EventoService) {

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
  buscarEventosMes(mes) {
    this.definirNomeMes(mes);
    const mesFormat = Number(mes);
    this.eventoService.BuscarPorMes(mesFormat).subscribe(resp => {
      console.log(resp);
      if (resp.success) {
        for (let i = 0; i < resp.object.length; i++) {
          this.formEvento.push(new EventoModel({
            imagem: this.Url + resp.object[i].imagem,
            id: resp.object[i].id,
            descricao: resp.object[i].descricao,
          }));
        }
      }
    });
  }


  definirNomeMes(mes) {
    if (mes === '1') {
      this.mes = 'janeiro';
    } else if (mes === '2') {
      this.mes = 'fevereiro';
    } else if (mes === '3') {
      this.mes = 'março';
    } else if (mes === '4') {
      this.mes = 'abril';
    } else if (mes === '5') {
      this.mes = 'maio';
    } else if (mes === '6') {
      this.mes = 'junho';
    } else if (mes === '7') {
      this.mes = 'julho';
    } else if (mes === '8') {
      this.mes = 'agosto';
    } else if (mes === '9') {
      this.mes = 'setembro';
    } else if (mes === '10') {
      this.mes = 'outubro';
    } else if (mes === '11') {
      this.mes = 'novembro';
    } else if (mes === '12') {
      this.mes = 'dezembro';
    }
  }
  public antigos() {
    this.navCtrl.navigateRoot('/carrosAntigos');
  }
  public eventos() {
    this.navCtrl.navigateRoot('/eventos');
  }
}
