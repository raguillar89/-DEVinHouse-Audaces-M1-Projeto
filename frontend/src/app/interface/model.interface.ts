export interface IModel{
  id?: any,
  modelName: string,
  modelType: string,
  modelResponsible: string,
  modelCollection: string,
  modelEmbroidery: string,
  modelPrint: string
}

export class Model implements IModel {
  id?: any;
  modelName!: string;
  modelType!: string;
  modelResponsible!: string;
  modelCollection!: string;
  modelEmbroidery!: string;
  modelPrint!: string;
}
