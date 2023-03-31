import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Collection } from 'src/app/interface/collection.interface';
import { Model } from 'src/app/interface/model.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent  implements OnInit{

  model: Model = new Model();
  listModels: Model[] = [];
  collection: Collection = new Collection();
  listCollections: Collection[] = [];
  result: any;

  displayedColumns: string[] = ['id', 'modelName', 'modelResponsible', 'modelCollection'];
  dataSource = new MatTableDataSource<Model>(this.listModels);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ModelService, private router: Router, private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.ngAfterViewInit();
    this.findAll();
    this.findAllCollections();
  }

  findAll() {
    this.service.findAll().subscribe((models) => {
      this.listModels = models;
      this.dataSource = new MatTableDataSource<Model>(models);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  findAllCollections() {
    this.collectionService.findAll().subscribe((collections) => {
      this.listCollections = collections;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  redirect(id: any) {
    this.router.navigate([`wm/model/mlEdit/${id}`]);
  }

  bringCollectionName(id: number) {
    return this.listCollections.find((collection) => collection.id === id)?.collectionBrand;
  }
}
