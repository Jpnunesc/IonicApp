import { Component, OnInit } from '@angular/core';
import { RifasModel } from '../../models/rifasModel';
import { environment } from '../../environments/environment';
import { RifasService } from '../../servicos/rifasService';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rifas',
  templateUrl: './rifas.page.html',
  styleUrls: ['./rifas.page.scss'],
})
export class RifasPage implements OnInit {

formRifa: RifasModel[] = new Array<RifasModel>();
 Url = '';
  constructor(public navCtrl: NavController,
  public modalCtrl: ModalController,
  private rifasSevice: RifasService) {
    this.Url = environment.urlImg;
   }

  ngOnInit() {
    this.search();
  }
  search() {
    this.rifasSevice.search().subscribe(resp => {
      if (resp.success) {
        for (let i = 0; i < resp.object.length; i ++) {
          this.formRifa.push( new RifasModel({
            imagem: this.Url + resp.object[i].imagem,
            id: resp.object[i].id,
            descricao: resp.object[i].descricao,
            preco: resp.object[i].preco,
            numero:  resp.object[i].numero,
          }));
        }
      }
      console.log(resp);
    });
   }
   partipicarRifa(id) {
    this.navCtrl.navigateRoot('/ParticipaRifa/' + id);
   }

}
