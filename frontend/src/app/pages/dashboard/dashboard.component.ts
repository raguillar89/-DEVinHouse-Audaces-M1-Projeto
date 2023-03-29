import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  sortedValue: Collection[] = [];
  collectionModelQtd: any[] = [];

  displayedColumns: string[] = ['collectionName', 'collectionResponsible', 'collectionModelQuantity', 'collectionBudget'];
  dataSource = new MatTableDataSource<Collection>(this.listCollections);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private modelService: ModelService, private collectionService: CollectionService, private http: HttpClient) {
    this.sortedValue = this.listCollections.slice();
  }

  ngOnInit(): void {
    this.ngAfterViewInit();
    this.findAllCollection();
    this.findAllModel();
  }

  findAllCollection() {
    this.collectionService.findAll().subscribe((collections) => {
      this.listCollections = collections;
      this.dataSource = new MatTableDataSource<Collection>(collections);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.averageBudget();
      setTimeout(() => {
        this.collectionModelQtd = this.getModelQuantity();
        this.dataSource = new MatTableDataSource<Collection>(this.collectionModelQtd);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 100);
    })
  }

  findAllModel() {
    this.modelService.findAll().subscribe((models) => {
      this.listModels = models;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  averageBudget() {
    const sum = this.listCollections.reduce((acc, obj) => {
      return acc + obj.collectionBudget;
    }, 0)

    const lgt = this.listCollections.length;
    const total = sum / lgt;

    return total;
  }

  sortValue(sort: Sort) {
    const data = this.listCollections.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedValue = data;
      return;
    }

    this.sortedValue = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.collectionBudget, b.collectionBudget, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getModelQuantity() {
    const returnValue: any[] = [];
    this.listCollections.forEach((collection, i) => {
      const modelByCollection = this.listModels.filter((model) => model.modelCollection === collection.id)
      const obj = {
        ...this.listCollections[i],
        collectionModelQuantity: modelByCollection.length
      }
      returnValue.push(obj);
    })
    return returnValue;
  }
}
