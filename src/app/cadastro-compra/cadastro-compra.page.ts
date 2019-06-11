import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuarioModel';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../servicos/usuarioService';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-compra',
  templateUrl: './cadastro-compra.page.html',
  styleUrls: ['./cadastro-compra.page.scss'],
})
export class CadastroCompraPage implements OnInit {

  idRifa: number;
  formUsuario: UsuarioModel = new UsuarioModel();
  msg = '';
  msgNome = '';
  msgNumero = '';
  msgEstado = '';
  constructor( private route: ActivatedRoute, private usuarioService: UsuarioService, public navCtrl: NavController) { }

  ngOnInit() {
    this.prepararPagina();
  }
  prepararPagina() {
    if (this.route.params) {
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.prepararDados(params['id']);
        }
      });
    }
  }
  confirmar() {
    this.limparMsg();
    if (this.validarDados()) {
      this.usuarioService.cadastrar(this.formUsuario).subscribe(resp => {
        this.limparForm();
        this.msg = resp.message;
        setTimeout(() => this.voltar(), 4000);
        });
    }
  }
  limparMsg() {
    this.msg = '';
    this.msgNome = '';
    this.msgNumero = '';
    this.msgEstado = '';
  }
  validarDados() {
    if (this.formUsuario.nome === null || this.formUsuario.nome === undefined) {
      this.msgNome = 'Nome obrigatório!';
    }
    if (this.formUsuario.telefone === null || this.formUsuario.telefone === undefined) {
      this.msgNumero = 'Número de telefone obrigatório!';
    }
    if (this.formUsuario.estado === null || this.formUsuario.estado === undefined) {
      this.msgEstado = 'Nome do estado obrigatório!';
    }
    if (this.msgNome !== '' || this.msgNumero !== '' || this.msgEstado !== '') {
      return false;
    }
    return true;
  }
  voltar() {
    this.navCtrl.navigateRoot('/rifas');
  }
  limparForm() {
    this.formUsuario = new UsuarioModel();
  }
  prepararDados(id) {
    this.formUsuario.idRifa = id;
  }
}
