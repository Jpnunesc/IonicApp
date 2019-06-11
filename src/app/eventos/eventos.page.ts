import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  mes: number;
  constructor(  public navCtrl: NavController) { }

  ngOnInit() {
  }

  public eventos(el) {
    if (el.toElement.textContent === 'Janeiro') {
  this.mes = 1;
    } else if (el.toElement.textContent === 'Fevereiro') {
      this.mes = 2;
    } else if (el.toElement.textContent === 'Março') {
      this.mes = 3;
    } else if (el.toElement.textContent === 'Abril') {
      this.mes = 4;
    } else if (el.toElement.textContent === 'Maio') {
      this.mes = 5;
    } else if (el.toElement.textContent === 'Junho') {
      this.mes = 6;
    } else if (el.toElement.textContent === 'Julho') {
      this.mes = 7;
    } else if (el.toElement.textContent === 'Agosto') {
      this.mes = 8;
    } else if (el.toElement.textContent === 'Setembro') {
      this.mes = 9;
    } else if (el.toElement.textContent === 'Outubro') {
      this.mes = 10;
    } else if (el.toElement.textContent === 'Novembro') {
      this.mes = 11;
    } else if (el.toElement.textContent === 'Dezembro') {
      this.mes = 12;
    }
    this.navCtrl.navigateRoot('eventos-mes/' + this.mes);
  }
  antigos() {
    this.navCtrl.navigateRoot('/home');
  }
  seminovos() {
    this.navCtrl.navigateRoot('/carrosAntigos');
  }
}
