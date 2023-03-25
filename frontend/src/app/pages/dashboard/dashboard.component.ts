import { Component } from '@angular/core';
import { Collection } from 'src/app/interface/collection.interface';
import { Model } from 'src/app/interface/model.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  model: Model = new Model();
  listModels: Model[] = [];
  collection: Collection = new Collection();
  listCollections: Collection[] = [];

  displayedColumns: string[] = ['Coleção', 'Responsável', 'Modelos', 'Orçamento'];

  constructor(private modelService: ModelService, private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.findAllCollection();
    this.findAllModel();
  }

  findAllCollection() {
    this.collectionService.findAll().subscribe((collections) => {
      this.listCollections = collections;
    })
  }

  findAllModel() {
    this.modelService.findAll().subscribe((models) => {
      this.listModels = models;
    })
  }
}
