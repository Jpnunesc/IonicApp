export class RifasModel {

    id: string;
    descricao: string;
    imagem: string;
    preco: number;
    numero: string;
    status: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
