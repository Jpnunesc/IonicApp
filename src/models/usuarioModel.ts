export class UsuarioModel {

    id: string;
    nome: string;
    telefone: string;
    idRifa: number;
    estado: number;
    ganhador = false;
    numero = 0;
    ativo = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
