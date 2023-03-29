import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Collection } from 'src/app/interface/collection.interface';
import { Model } from 'src/app/interface/model.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit{

  collection: Collection = new Collection();
  listCollections: Collection[] = [];
  model: Model = new Model();
  listModels: Model[] = [];
  collectionModelQtd: any[] =[];

  displayedColumns: string[] = ['collectionName', 'collectionResponsible', 'collectionSeason - collectionYear', 'collectionModelQuantity', 'collectionBudget'];
  dataSource = new MatTableDataSource<Collection>(this.listCollections);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: CollectionService, private modelService: ModelService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.ngAfterViewInit();
    this.findAll();
    this.findAllModels();
  }

  findAll() {
    this.service.findAll().subscribe((collections) => {
      this.listCollections = collections,
      this.dataSource = new MatTableDataSource<Collection>(collections);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      setTimeout(() => {
        this.collectionModelQtd = this.getModelQuantity();
        this.dataSource = new MatTableDataSource<Collection>(this.collectionModelQtd);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 100);
    })
  }

  findAllModels() {
    this.modelService.findAll().subscribe((models) => {
      this.listModels = models;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  redirect(id: any) {
    this.router.navigate([`wm/collection/clEdit/${id}`]);
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
