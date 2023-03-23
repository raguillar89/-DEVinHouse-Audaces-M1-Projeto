export interface ICollection{
  id?: number,
  collectionName: string,
  collectionResponsible: string,
  collectionSeason: string,
  collectionYear: string,
  collectionBrand: string,
  collectionModelQuantity: number,
  collectionBudget: number
}

export class Collection implements ICollection {
  id?: number | undefined;
  collectionName!: string;
  collectionResponsible!: string;
  collectionSeason!: string;
  collectionYear!: string;
  collectionBrand!: string;
  collectionModelQuantity!: number;
  collectionBudget!: number;
}
