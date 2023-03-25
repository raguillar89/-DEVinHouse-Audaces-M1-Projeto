export interface ICollection{
  id?: any,
  collectionName: string,
  collectionResponsible: string,
  collectionSeason: string,
  collectionYear: string,
  collectionBrand: string,
  collectionModelQuantity: any,
  collectionBudget: number
}

export class Collection implements ICollection {
  id?: any;
  collectionName!: string;
  collectionResponsible!: string;
  collectionSeason!: string;
  collectionYear!: string;
  collectionBrand!: string;
  collectionModelQuantity!: any;
  collectionBudget!: number;
}
