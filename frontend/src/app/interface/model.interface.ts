export interface IModel{
  id?: any,
  modelName: string,
  modelType: string,
  modelResponsible: string,
  modelCollection: number,
  modelEmbroidery: string,
  modelStamp: string
}

export class Model implements IModel {
  id?: any;
  modelName!: string;
  modelType!: string;
  modelResponsible!: string;
  modelCollection!: number;
  modelEmbroidery!: string;
  modelStamp!: string;
}
