export class EventoModel {
    id: number;
    mes: number;
    imagem: string;
    descricao: string;
constructor(values: Object = {}) {
     Object.assign(this, values);
      }
}
