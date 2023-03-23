export interface ICollection{
  idCollection?: number,
  collectionName: string,
  collectionResponsible: string,
  collectionSeason: string,
  collectionYear: string,
  collectionBrand: string,
  collectionModelQuantity: number,
  collectionBudget: number
}

export class Collection implements ICollection {
  idCollection?: number | undefined;
  collectionName!: string;
  collectionResponsible!: string;
  collectionSeason!: string;
  collectionYear!: string;
  collectionBrand!: string;
  collectionModelQuantity!: number;
  collectionBudget!: number;
}
